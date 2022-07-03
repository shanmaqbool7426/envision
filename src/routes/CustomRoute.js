import React from "react";
import { Redirect, Route } from "react-router-dom";
export function CustomRoute({children, ...rest },) {
    const location= window.location.hostname
    let visited = localStorage.getItem("domain") ===location
    !visited && localStorage.setItem("domain",location) 
  return (
    <Route
      {...rest}
      render={({ location }) =>
      visited ? (
                <Redirect
                to={{
                  pathname: `${process.env.PUBLIC_URL}/welcome`,
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
