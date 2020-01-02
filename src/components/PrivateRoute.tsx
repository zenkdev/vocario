import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { FirebaseContext } from './';
import { Login } from '../pages';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const context = useContext(FirebaseContext);
  const isLoggedIn = context.currentUser != null;
  return (
    <Route
      {...rest}
      render={props =>
        // @ts-ignore
        isLoggedIn ? <Component {...props} /> : <Login {...props} />
      }
    />
  );
};

export default PrivateRoute;
