import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';

function AppRoutes() {
  return (
    <Route path="/" component={Home} />
  );
}

export default AppRoutes;
