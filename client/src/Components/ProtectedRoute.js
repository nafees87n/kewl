import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ exact, path, component }) =>
  Cookies.get('chatToken') ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );

export default ProtectedRoute;
