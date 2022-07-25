import React from 'react';
import { Route } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import '../Pages/Auth/styles.css';

function AuthRoutes() {
  return (
    <section>
      <Route path="/" component={Auth} exact />
    </section>
  );
}

export default AuthRoutes;
