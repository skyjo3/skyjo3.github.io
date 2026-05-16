import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import projectsData from '../pages/projectListData';
import PasswordPrompt from './PasswordPrompt';

async function sha256hex(value) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const PasswordProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  const project = projectsData.find((p) => p.linkPath === location.pathname);
  const storedHash = process.env.REACT_APP_PROJECT_PASSWORD_HASH;

  if (!project || !project.passwordProtected || !storedHash) {
    return children;
  }

  const storageKey = 'unlocked_' + project.linkPath;
  if (unlocked || sessionStorage.getItem(storageKey) === 'true') {
    return children;
  }

  const handleSubmit = async (value) => {
    const hash = await sha256hex(value);
    if (hash === storedHash) {
      sessionStorage.setItem(storageKey, 'true');
      setUnlocked(true);
      setError(null);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <PasswordPrompt
      isOpen={true}
      projectTitle={project.title}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      error={error}
    />
  );
};

export default PasswordProtectedRoute;
