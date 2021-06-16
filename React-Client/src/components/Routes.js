import React from "react"
import { Route, Switch } from "react-router-dom"
//pages
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  )
}
