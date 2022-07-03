import React from "react";
import { Route, Switch } from "react-router-dom";
import Articales from "../components/articales/Articales.jsx";
import ArticleDetail from "../components/articales/ArticleDetail.jsx";
import SplashSecreen from "../components/features/splash/SplashScreens.jsx";
import LoginForm from "../components/pages/auth/Login.jsx";
import SignupForm from "../components/pages/auth/Signup.jsx";
import SocialLogin from "../components/pages/auth/SocialLogin.jsx";
import NotFound from "../components/pages/NotFound.jsx";
import WellComePage from "../components/pages/WellComePage.jsx";
import { PrivateRoute } from "./Protected-route";
import { LoginRoute } from "./loginRoute.js";
import { CustomRoute } from "./CustomRoute.js";
const AppRoute = () => {
  return (
    <Switch>
      <CustomRoute exact path={`${process.env.PUBLIC_URL}/`}><SplashSecreen /></CustomRoute>
      <Route exact path={`${process.env.PUBLIC_URL}/auth/social-login`} component={(props) => <SocialLogin {...props} />} />
      <PrivateRoute axact path={`${process.env.PUBLIC_URL}/articles/list`}>  <Articales />  </PrivateRoute>
      <PrivateRoute exact path= {`${process.env.PUBLIC_URL}/detail-article/:id`}>  <ArticleDetail />  </PrivateRoute>
      <LoginRoute exact path={`${process.env.PUBLIC_URL}/welcome`}><WellComePage /></LoginRoute>
      <LoginRoute exact path={`${process.env.PUBLIC_URL}/auth/login`}><LoginForm /> </LoginRoute>
      <LoginRoute exact path={`${process.env.PUBLIC_URL}/auth/signup`}><SignupForm /> </LoginRoute>
      <Route   component={NotFound} />
    </Switch>
  );
};


export default AppRoute;
