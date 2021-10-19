import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
/**
 * @author
 * @function PrivateRoute
 **/

export const PrivateRoute = ({ children, ...rest }) => {
  let isLogged = useSelector(state=>state.auth.isLogged)
  return (
    <Route
      {...rest}
      render={({location}) => {
        return !isLogged ? (
          <Redirect to={{ pathname: "/login", state: { location } }} />
        ) : (
          children
        );
      }}
    />
  );
};
