import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import projectsData from '../pages/projectListData';
import PasswordPrompt from './PasswordPrompt';

const PasswordProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  const project = projectsData.find((p) => p.linkPath === location.pathname);

  if (!project || !project.password) {
    return children;
  }

  const storageKey = 'unlocked_' + project.linkPath;
  if (unlocked || sessionStorage.getItem(storageKey) === 'true') {
    return children;
  }

  const handleSubmit = (value) => {
    if (value === project.password) {
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
