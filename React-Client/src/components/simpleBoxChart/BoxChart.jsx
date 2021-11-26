import React, { useEffect, useContext } from 'react';
import Plot from 'react-plotly.js';
import { Context } from '../app/Global';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import SelectBox from "../selectBox/SelectBox"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function SimpleBoxChart() {
  const [globalState, setGlobalState] = useContext(Context);

  const { data, dataset, rows, indicador, subindicador, ano, mes } = globalState
  let year = ano
  useEffect(() => {
    const { indicador, subindicador, ano, mes } = globalState
    if (indicador != undefined && subindicador != undefined) {
      axios.get(`http://localhost:3030/radar?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&year=` + year + ``)
        .then(res => {
          const dataRows = JSON.parse(JSON.stringify(res.data));
          setGlobalState({
            indicador: indicador,
            subindicador: subindicador,
            dataset: dataRows.dataset,
            ano: ano,
            mes: mes,
            rows: dataRows.rows,
            data: dataRows.data
          })
        })
    }

  }, []);


  const plotData = []
  data.forEach(dataRows => {
    plotData.push({
      theta: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"], r: dataRows.y, name: dataRows.aces, fill: "toself", type: "scatterpolar",
    })
  });

  function setData() {
    axios.get(`http://localhost:3030/radar?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&year=` + year + ``)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        setGlobalState({
          indicador: indicador,
          subindicador: subindicador,
          dataset: dataRows.dataset,
          ano: year,
          mes: mes,
          rows: dataRows.rows,
          data: dataRows.data
        })
      })
  }

  function onTagChange(event, values) {
    year = values.ano;
  }

  let data321 = [];

  data.forEach(l => {
    data321.push({
      y: l.y,
      type: 'box',
      name: l.aces
    })
  });


  var layout23 = {
    showlegend: true,
    width: 1200,
    height: 600,
    xaxis: { visible: false }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item >
          <SelectBox type={1} />
        </Grid>
        <Grid item >
          <SelectBox type={2} />
        </Grid>
        <Grid item>
          {<Autocomplete
            id='combo23'
            disableClearable
            options={[
              { title: '2021', ano: 2021 },
              { title: '2020', ano: 2020 },
              { title: '2019', ano: 2019 },
              { title: '2018', ano: 2018 },
              { title: '2017', ano: 2017 },
              { title: '2016', ano: 2016 },
              { title: '2015', ano: 2015 },
              { title: '2014', ano: 2014 },
            ]}
            value={{ title: '' + year + '', ano: year }}
            getOptionLabel={(option) => option.title}
            style={{ width: 250 }}
            onChange={onTagChange}
            clearOnBlur={false}
            renderInput={params => (
              <TextField {...params} label={"Ano"} variant='outlined' />
            )}
          />}
        </Grid>
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={setData} >Carregar</Button>
        </Grid>
        <Grid item xs={12} style={{ height: 686 }} >
          <Plot data={data321} layout={layout23} config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }} />
        </Grid>
      </Grid>

    </>


  );
}

const layout = {
  polar: {
    radialaxis: {
      visible: true,
      /*      range: [0, 50] */
    }
  },
  showlegend: true,
  width: 1400,
  height: 600
};

