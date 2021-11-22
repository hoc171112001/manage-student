import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
/**
 * @author
 * @function PrivateRoute
 **/

export const PrivateRoute = ({ children, ...rest }) => {
  let {isLogged,isGuest} = useSelector(state=>state.auth)
  return (
    <Route
      {...rest}
      render={({location}) => {
        return !isLogged && !isGuest ? (
          <Redirect to={{ pathname: "/login", state: { location } }} />
        ) : (
          children
        );
      }}
    />
  );
};
