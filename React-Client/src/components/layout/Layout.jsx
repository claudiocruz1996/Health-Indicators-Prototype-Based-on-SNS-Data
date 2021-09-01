/*import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { grey } from '@material-ui/core/colors';
import BarChartIcon from '@material-ui/icons/BarChart';
import BlockIcon from '@material-ui/icons/Block';
import WarningIcon from '@material-ui/icons/Warning';
import { teal } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

//Routes
import ReactRouter from '../../Routes';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: grey[200],
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: grey[200],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(5)+1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7)+1,
    },
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
    padding: theme.spacing(2,3,0,2),
    height: window.innerHeight, // <= You Need This Line
    background: "white"
  },
  iconsDrawer: {
    color: teal[500],
  },

}));

export default function Layout() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Monitor da Saúde
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon /> 
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button component={Link} to={"/"}>
                <ListItemIcon  className={classes.iconsDrawer}><WarningIcon/></ListItemIcon>
                <ListItemText className={classes.iconsDrawer}>Home</ListItemText>
        </ListItem>
        <ListItem button component={Link} to={"/dashboard"} >
              <ListItemIcon className={classes.iconsDrawer}><BarChartIcon/></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Dashboard</ListItemText>
        </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReactRouter/>
      </main>

    </div>
  );
}*/

import React from 'react';
//Material UI Core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//Routes
import ReactRouter from '../../Routes';
//
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BarChartIcon from '@material-ui/icons/BarChart';
import BlockIcon from '@material-ui/icons/Block';
import WarningIcon from '@material-ui/icons/Warning';
import { teal } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

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
    width: 200
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
      <Drawer anchor={'left'} open={state['left']} onClose={toggleMyDrawer(false) } >
        <div
        className={classes.drawer}
        role="presentation"
        onClick={toggleMyDrawer(false)}
        onKeyDown={toggleMyDrawer(false)}
       >
          <Divider />
            <List>
            <ListItem button component={Link} to={"/"}>
                    <ListItemIcon  className={classes.iconsDrawer}><WarningIcon/></ListItemIcon>
                    <ListItemText className={classes.iconsDrawer}>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={"/dashboard"} >
                  <ListItemIcon className={classes.iconsDrawer}><BarChartIcon/></ListItemIcon>
                  <ListItemText className={classes.iconsDrawer}>Dashboard</ListItemText>
            </ListItem>
            </List>
            <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReactRouter/>
      </main>
    </div>
  );
}

