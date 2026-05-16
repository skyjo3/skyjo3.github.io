import React from 'react';
import { useLocation } from 'react-router-dom';
import projectsData from '../pages/projectListData';
import PasswordProtectedRoute from './PasswordProtectedRoute';

const ProjectPage = ({ component: Detail }) => {
  const { pathname } = useLocation();
  const data = projectsData.find(p => p.linkPath === pathname);

  if (data?.passwordProtected) {
    return <PasswordProtectedRoute><Detail /></PasswordProtectedRoute>;
  }
  return <Detail />;
};

export default ProjectPage;
