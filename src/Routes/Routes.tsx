import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import LoadingPage from '../Components/LoadingPage/LoadingPage';

const LOADING_TIME = 2000;

function Routes() {
  const isLoged = useSelector(({ userData }: any) => userData.loged);
  const [isLoading, setIsLoading] = useState(true);

  const updateLoading = () => setTimeout(() => setIsLoading(false), LOADING_TIME);

  useEffect(() => {
    updateLoading();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    isLoged ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;
