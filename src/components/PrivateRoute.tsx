/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';

import { RootState } from '../app/rootReducer';
import Login from '../features/login/Login';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.app);
  // @ts-ignore
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Login {...props} />)} />;
};

export default PrivateRoute;
