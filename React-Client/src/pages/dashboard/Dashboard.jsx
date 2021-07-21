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


const data = JSON.parse(JSON.stringify({
  "dataset": "hipertensao",
  "rows": 15,
  "data": [
    {
      "date": "May 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 3053.94
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 3101.95
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 942.8
        }
      ]
    },
    {
      "date": "Apr 2021",
      "info": [
        {
          "aces": "ACES Sao Mamede",
          "value": 2597.34
        },
        {
          "aces": "ACES Matosinhos",
          "value": 2474.95
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 721.64
        }
      ]
    },
    {
      "date": "Mar 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 1880.58
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 1997.37
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 510.04
        }
      ]
    },
    {
      "date": "Feb 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 1098.14
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 261.34
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 1268.29
        }
      ]
    },
    {
      "date": "Jan 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 525.99
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 686.89
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 138.13
        }
      ]
    }
  ]
}.data))

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '100%',
    },

  }));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <>
         {/* title component */}
         <h1>Dashboard Data</h1>
          <br/>
            <div className={classes.root}>
{/*               <Paper className={classes.paper}>
                    <Grid container spacing={2}  justify="center">
                      <Grid container xs={12} justify="space-around">
                        <Grid item xs={2}>
                          <SelectBox mainTitle="Indicador"/>
                        </Grid>
                        <Grid item xs={2}>
                          <SelectBox mainTitle="ACES"/>
                        </Grid>
                        <Grid item xs={2}>
                          <SelectBox mainTitle="teste"/>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br/>
                </Paper> */}
            </div>
            <br/>
            <Paper className={classes.paper}>
              <SimpleLineChart/>
            </Paper>
        </>
    )
}
