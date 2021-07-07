import React from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import HomeBoard from "../pages/homeboard/Homeboard"
//import Login from "../pages/login";

// context
//import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  //var { isAuthenticated } = useUserState();





   return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route exact path="/dashboard" render={() => <Redirect to="/app/dashboard" />}/>
        <Route exact path="/homeboard" render={() => <Redirect to="/app/homeboard" />}/>
        <Route component={Layout} /> 
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  // #######################################################################

/*   function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  } */
}
