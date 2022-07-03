import "./App.css";
import Header from "./components/Header";
// import Filters from "./components/Filters";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SplashSecreen from "./components/features/splash/splashScreens";
import WellComePage from "./components/pages/wellComePage";
import Articales from "./components/articales/articales";
import LoginForm from "./components/pages/auth/login";
import SignupForm from "./components/pages/auth/signup";
import DetailArticle from "./components/articales/ArticleDetail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/wellcom"
            component={(props) => <WellComePage {...props} />}
          />

          <Route
            exact
            path="/list"
            component={(props) => <Articales {...props} />}
          />
          <Route
            exact
            path="/"
            component={(props) => <SplashSecreen {...props} />}
          />
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Route exact path="/detail-article">
            <DetailArticle />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
