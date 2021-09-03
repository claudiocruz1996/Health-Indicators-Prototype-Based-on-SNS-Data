import React from 'react';
//Material UI Core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import WarningIcon from '@material-ui/icons/Warning';
import { teal } from '@material-ui/core/colors';
import Box from "@material-ui/core/Box";
//Routes
import ReactRouter from '../../Routes';
import { Link } from "react-router-dom";

import Logo from '../../assets/mds_logo_cor.png'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: window.innerHeight, // <= You Need This Line
    background: "white"
  },
  iconsDrawer: {
    color: teal[500],
  },
  drawer: {
    width: 300
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleMyDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ['left']: open });
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMyDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Monitor da Saúde
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleMyDrawer(false)} >
        <div
          className={classes.drawer}
          role="presentation"
          onClick={toggleMyDrawer(false)}
          onKeyDown={toggleMyDrawer(false)}
        >


          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="64"
            style={{ backgroundColor: teal[100] }}
          >
            <img src={Logo} alt="Logo" style={{ height: 64, width: 180 }} />
          </Box>
          <Divider />
          <List>
            <ListItem button component={Link} to={"/"}>
              <ListItemIcon className={classes.iconsDrawer}><WarningIcon /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={"/dashboard"} >
              <ListItemIcon className={classes.iconsDrawer}><BarChartIcon /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Dashboard</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReactRouter />
      </main>
    </div>
  );
}

