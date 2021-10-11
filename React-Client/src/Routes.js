import React from "react"
import { Route, Switch } from "react-router-dom"
//pages
import Dashboard from "./pages/dashboard/Dashboard"
import Lines from "./pages/lines/LinesChartBoard"
import Home from "./pages/home/Home"
import Monitor from "./pages/monitor/Monitor"
import Radial from "./pages/radial/RadialChartBoard"
import Maps from "./pages/map/MapsPage"

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lines" component={Lines} />
        <Route path="/monitor" component={Monitor} />
        <Route path="/radial" component={Radial} />
        <Route path="/map" component={Maps} />
      </Switch>
    </>
  )
}
