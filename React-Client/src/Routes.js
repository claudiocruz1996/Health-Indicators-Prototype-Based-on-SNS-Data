import React from "react"
import { Route, Switch } from "react-router-dom"
//pages
import Dashboard from "./pages/dashboard/Dashboard"
import Lines from "./pages/lines/LinesPage"
import Home from "./pages/home/Home"
import Monitor from "./pages/monitor/Monitor"
import Radar from "./pages/radial/RadarPage"
import Maps from "./pages/map/MapsPage"
import Box from "./pages/box/BoxPage"

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lines" component={Lines} />
        <Route path="/monitor" component={Monitor} />
        <Route path="/radar" component={Radar} />
        <Route path="/map" component={Maps} />
        <Route path="/box" component={Box} />
      </Switch>
    </>
  )
}
