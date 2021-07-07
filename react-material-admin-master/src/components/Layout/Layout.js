import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link, Grid, Container } from "@material-ui/core";
import Icon from "@mdi/react";
import Paper from "@material-ui/core/Paper";

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Homeboard from "../../pages/homeboard";
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/homeboard" component={Homeboard} />
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
          </Switch>

          {/* <Box position="fixed" bottom={0} width="100%">
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <div>
                    <Link
                      color={"primary"}
                      href={"https://flatlogic.com/"}
                      target={"_blank"}
                      className={classes.link}
                    >
                      Flatlogic
                    </Link>
                    <Link
                      color={"primary"}
                      href={"https://flatlogic.com/about"}
                      target={"_blank"}
                      className={classes.link}
                    >
                      About Us
                    </Link>
                    <Link
                      color={"primary"}
                      href={"https://flatlogic.com/blog"}
                      target={"_blank"}
                      className={classes.link}
                    >
                      Blog
                    </Link>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <div>
                    <Link
                      href={"https://www.facebook.com/flatlogic"}
                      target={"_blank"}
                    >
                      <IconButton aria-label="facebook">
                        <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
                      </IconButton>
                    </Link>
                    <Link
                      href={"https://twitter.com/flatlogic"}
                      target={"_blank"}
                    >
                      <IconButton aria-label="twitter">
                        <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                      </IconButton>
                    </Link>
                    <Link
                      href={"https://github.com/flatlogic"}
                      target={"_blank"}
                    >
                      <IconButton aria-label="github">
                        <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                      </IconButton>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box> */}
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
