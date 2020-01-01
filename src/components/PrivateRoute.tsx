import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { firebaseInstance } from '../services';

function isLoggedIn() {
  return firebaseInstance.isAuthenticated;
}

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    // @ts-ignore
    render={props => (isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
);

export default PrivateRoute;
