import React from 'react'
import Maps from "../../components/simpleMapChart/MapChart"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { teal, grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: teal[500],
  }

}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h4" noWrap className={classes.title}>
          Mapa Temporal
        </Typography>
        <Paper className={classes.paper}>
          <Maps />
        </Paper>
      </div>

    </>
  )
}
