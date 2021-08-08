import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CountryScreen from "../components/country/CountryScreen";
import HomeScreen from "../components/HomeScreen";
import NavLogo from "../components/ui/NavLogo";

const AppRouter = () => {

  return (
    <Router>
      <NavLogo />
      <div>
        <Switch>
          <Route  exact path="/" component={HomeScreen}  />
          <Route  exact path="/country/:countryCode" component={CountryScreen}  />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
