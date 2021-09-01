import React from 'react'
import SimpleLineChart from "../../components/simpleLineChart/SimpleLineChart"
import SimpleLineChart2 from "../../components/simpleLineChart2/SimpleLineChart2"
import SelectBox from "../../components/selectBox/SelectBox"
import ZoomLineChart from "../../components/zoomLineChart/ZoomLineChart"
import DatePicker from "../../components/datePicker/DatePicker"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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
                Indicadores
              </Typography>
              <Paper className={classes.paper}>
                <SimpleLineChart/>
              </Paper>
            </div>
            
        </>
    )
}
