import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { teal, grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import LineChart from "../../components/simpleLineChart/LineChart"




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 4),
  },
  paper200: {
    maxWidth: '100%',
    height: 200,
    padding: theme.spacing(2),
  },

  paper400: {
    maxWidth: '100%',
    height: 400,
    padding: theme.spacing(2),
  },

  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: teal[500],
  },
  typo: {
    marginTop: theme.spacing(3),
  },


}));

export default function Dashboard() {
  const classes = useStyles();
  return (



    <>
      <div className={classes.root}>
        <Typography variant="h4" noWrap className={classes.title}>
          Monitor
        </Typography>
        <br />
        <Grid container spacing={4} className="root">
          <Grid item xs={3}>
            <Paper className={classes.paper200}>
              <Typography align="center" className={classes.typo}>
                Indicadores
              </Typography>
              <br />
              <Divider />
              <Typography align="center" variant="h3" color="primary" className={classes.typo}>
                11
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper200}>
              <Typography align="center" className={classes.typo}>
                Hipertensos
              </Typography>
              <br />
              <Divider />
              <Typography align="center" variant="h3" color="primary" className={classes.typo}>
                63%
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper200}>
              <Typography align="center" className={classes.typo}>
                Teste
              </Typography>
              <br />
              <Divider />
              <Typography align="center" variant="h3" color="primary" className={classes.typo}>
                123
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper200}>
              <Typography align="center" className={classes.typo}>
                Teste
              </Typography>
              <br />
              <Divider />
              <Typography align="center" variant="h3" color="primary" className={classes.typo}>
                123
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper400}>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper400}>
            </Paper>
          </Grid>
        </Grid>
      </div>

    </>



  )
}





