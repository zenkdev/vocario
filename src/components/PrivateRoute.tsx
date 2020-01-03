/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { FirebaseContext } from '.';
import { Login } from '../pages';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(FirebaseContext);
  const isLoggedIn = currentUser != null;
  // @ts-ignore
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Login {...props} />)} />;
};

export default PrivateRoute;
