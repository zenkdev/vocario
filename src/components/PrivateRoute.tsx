/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { Login } from '../pages';
import AppContext from '../app/AppContext';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AppContext);
  const isLoggedIn = currentUser != null;
  // @ts-ignore
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Login {...props} />)} />;
};

export default PrivateRoute;
