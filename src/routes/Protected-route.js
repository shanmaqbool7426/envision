import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
export function PrivateRoute({ children, ...rest }) {
  const isLogin = useSelector((state) => state?.userData?.userData?.data?.isLogin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
                children
        ) : (
          <Redirect
            to={{
              pathname: "/pages/404",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
