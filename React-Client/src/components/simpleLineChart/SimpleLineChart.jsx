import React from "react";
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import axios from 'axios';
import SelectBox from "../../components/selectBox/SelectBox"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';


export default class MyLineChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indicador: "hipertensao",
      subIndicador: "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
      dataset:"",
      rows: 0,
      data: []
    }

    
  }

  componentDidMount() {
    const {indicador, subIndicador} = this.state
    axios.get(`http://localhost:3030/test?indicator_name=`+indicador+`&subIndicator_name=`+subIndicador+`&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
    .then(res => {
      const dataRows = JSON.parse(JSON.stringify(res.data));
      this.setState({ 
        dataset: dataRows.dataset,
        rows: dataRows.rows,
        data: dataRows.data
      });
    })
  }

  render() {

    const {data, dataset, rows, indicador, subIndicador} = this.state
    const plotData = []
    data.forEach(dataRows => {
      plotData.push({ x: dataRows.x, y: dataRows.y, name: dataRows.aces, mode: 'lines',
      connectgaps:false },)
    });
    return (
      <>
        <Box p={3}>
            <Grid container xs={12} spacing={3}>
              <Grid item >
                <SelectBox name={indicador} mainTitle="Indicador"/>
              </Grid>
              <Grid item >
                <SelectBox mainTitle="Sub Indicador" />
              </Grid>
              <Grid item >
                <Button  style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={() => { alert('clicked') }} >Carregar</Button>
              </Grid>
            </Grid>
  
        </Box>
        <Plot
          data={plotData}
          layout={{height:800,  title:'tabela: '+dataset, xaxis: { rangemode:"nonnegative", rangeslider: { visible: true } }, yaxis: {autorange: true, fixedrange: false, rangemode:"nonnegative"}}}
          config={{responsive: true, displaylogo: false, modeBarButtonsToRemove:["autoScale2d", "lasso2d", "select2d"]}}
          style= {{width:"100%"}}
    
        />
        <p>returned results: {rows}</p>
    </>
    );
  }
}

