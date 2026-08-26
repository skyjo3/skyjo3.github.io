import React, { useState, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import projectsData from '../pages/projectListData';
import PasswordPrompt from './PasswordPrompt';
import { unlockProject, getCachedUrlMap } from '../utils/s3Assets';

export const ProjectUnlockContext = createContext(null);
export const useProjectUnlock = () => useContext(ProjectUnlockContext);

async function sha256hex(value) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const PasswordProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError]       = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [urlMap, setUrlMap]     = useState(null);
  const [loading, setLoading]   = useState(false);

  const project    = projectsData.find(p => p.linkPath === location.pathname);
  const storedHash = process.env.REACT_APP_PROJECT_PASSWORD_HASH;

  if (!project || !project.passwordProtected || !storedHash) {
    return children;
  }

  const storageKey = 'unlocked_' + project.linkPath;

  if (unlocked || sessionStorage.getItem(storageKey) === 'true') {
    const cachedMap = urlMap || getCachedUrlMap(project.slug);
    return (
      <ProjectUnlockContext.Provider value={{ slug: project.slug, urlMap: cachedMap }}>
        {children}
      </ProjectUnlockContext.Provider>
    );
  }

  const handleSubmit = async (value) => {
    const hash = await sha256hex(value);
    if (hash !== storedHash) {
      setError('Incorrect password. Please try again.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const map = await unlockProject(project.slug, hash);
      sessionStorage.setItem(storageKey, 'true');
      setUrlMap(map);
      setUnlocked(true);
    } catch {
      setError('Could not load project content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PasswordPrompt
      isOpen={true}
      projectTitle={project.title}
      onSubmit={handleSubmit}
      onCancel={() => navigate(-1)}
      error={error}
      loading={loading}
    />
  );
};

export default PasswordProtectedRoute;
