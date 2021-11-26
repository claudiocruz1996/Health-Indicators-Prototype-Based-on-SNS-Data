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
import ShowChartOutlined from '@material-ui/icons/ShowChartOutlined';
import MapOutlined from '@material-ui/icons/MapOutlined';
import { teal, grey } from '@material-ui/core/colors';

import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import Box from "@material-ui/core/Box";
//Routes
import ReactRouter from '../../Routes';
import { Link } from "react-router-dom";

import Logo from '../../assets/monitorDrawer.png'
import Radial from '../../assets/radial.png'
import BoxP from '../../assets/box2.png'





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
    background: grey[100],
    marginLeft: 250,
  },
  iconsDrawer: {
    color: teal[500],
  },
  drawer: {
    width: 250,
    borderRight: 'none'
  },
  drawerList: {
    padding: theme.spacing(5, 0),
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  /*   const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleMyDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, ['left']: open });
    }; */


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/*   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMyDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Monitor da Saúde
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer /* anchor={'left'} open={state['left']} onClose={toggleMyDrawer(false)} */ variant="permanent" >
        <div
          className={classes.drawer}
        /*role="presentation"
        onClick={toggleMyDrawer(false)}
        onKeyDown={toggleMyDrawer(false)} */

        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="96"
          >
            <img src={Logo} alt="Logo" style={{ height: 96, width: 300 }} />
          </Box>
          <List className={classes.drawerList}>
            <ListItem button component={Link} to={"/"}>
              <ListItemIcon className={classes.iconsDrawer}><HomeOutlined /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Início</ListItemText>
            </ListItem>
            {/*             <ListItem button component={Link} to={"/monitor"}>
              <ListItemIcon className={classes.iconsDrawer}><DashboardOutlined /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Monitor</ListItemText>
            </ListItem> */}
            <ListItem button component={Link} to={"/lines"} >
              <ListItemIcon className={classes.iconsDrawer}><ShowChartOutlined /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Linhas</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={"/radar"} >
              <ListItemIcon className={classes.iconsDrawer}><img src={Radial} alt="Radial" /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Radial</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={"/box"} >
              <ListItemIcon className={classes.iconsDrawer}><img src={BoxP} alt="Box Plot" /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Box Plot</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={"/map"} >
              <ListItemIcon className={classes.iconsDrawer}><MapOutlined /></ListItemIcon>
              <ListItemText className={classes.iconsDrawer}>Mapas</ListItemText>
            </ListItem>
          </List>
          {/* <Divider /> */}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReactRouter />
      </main>
    </div>
  );
}

