import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
export function LoginRoute({ children, ...rest }) {
  const isLogin = useSelector((state) => state?.userData?.userData?.data?.isLogin);
  console.log(">>> RES",{...rest})
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
                <Redirect
                to={{
                  pathname: `${process.env.PUBLIC_URL}/articles/list`,
                  state: { from: location },
                }}
                />
        ) : (
            children
        )
      }
    />
  );
}
