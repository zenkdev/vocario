import React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';

import { RootState } from '../app/rootReducer';
import LoginPage from '../features/login/LoginPage';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.app);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <LoginPage {...props} />)} />;
};

export default PrivateRoute;
