import React from 'react';
import { Route, type RouteProps } from 'react-router-dom';

import LoginPage from '../features/login/LoginPage';
import { useAppSelector } from '../hooks';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAppSelector(state => state.app);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <LoginPage {...props} />)} />;
};

export default PrivateRoute;
