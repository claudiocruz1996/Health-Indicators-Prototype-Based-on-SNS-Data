import React from 'react'
import SimpleLineChart from "../../components/simpleLineChart/SimpleLineChart"
import SelectBox from "../../components/selectBox/SelectBox"
import MultipleSelectBox from "../../components/multipleSelectBox/MultipleSelectBox"
import DatePicker from "../../components/datePicker/DatePicker"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
        <div>
         <h1>Dashboard Data</h1>
          <br/>
          {/* component */}
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}  justify="center">
                      <Grid item>
                          <h1>Actions Block</h1>
                      </Grid>
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
                    {/* <DatePicker/> */}
                </Paper>
            </div>
            <br/>
           <SimpleLineChart/>
           <MultipleSelectBox/>
        </div>
    )
}
