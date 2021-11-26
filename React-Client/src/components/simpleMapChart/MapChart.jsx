import React, { useState, useEffect, useContext } from 'react';
import Plot from 'react-plotly.js';
import { Context } from '../app/Global';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import SelectBox from "../selectBox/SelectBox"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import aces2 from './deu2.json'
import t from './t.json'

function unpack(rows, key, sndkey) {
  return rows.map(function (row) {
    return sndkey == null ? row[key] : row[sndkey] + " - " + row[key];
  });
}

export default function SimpleMapChart() {

  const [globalState, setGlobalState] = useContext(Context);
  const { data, dataset, rows, indicador, subindicador, ano, mes } = globalState
  const scl = [[0, 'rgb(0, 150, 136)'], [0.35, 'rgb(38, 166, 153)'], [0.5, 'rgb(79, 183, 172)'], [0.6, 'rgb(121, 200, 192)'], [0.7, 'rgb(173, 221, 216)'], [1, 'rgb(238, 248, 247)']]
  let year = ano, month = mes

  useEffect(() => {
    const { indicador, subindicador, ano, mes } = globalState

    if (indicador != undefined && subindicador != undefined) {
      axios.get(`http://localhost:3030/map?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&year=` + year + `&month=` + month + ``)
        .then(res => {
          const dataRows = JSON.parse(JSON.stringify(res.data));
          setGlobalState({
            indicador: indicador,
            subindicador: subindicador,
            ano: ano,
            mes: mes,
            dataset: dataRows.dataset,
            rows: dataRows.rows,
            data: dataRows.data
          })
        })
    }

  }, []);

  function setData() {
    axios.get(`http://localhost:3030/map?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&year=` + year + `&month=` + month + ``)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        setGlobalState({
          indicador: indicador,
          subindicador: subindicador,
          dataset: dataRows.dataset,
          ano: year,
          mes: month,
          rows: dataRows.rows,
          data: dataRows.data
        })
      })
  }

  var layout234 = {
    mapbox: {
      center: { lon: -7.85, lat: 39.55 },
      zoom: 5.4, layers: [{
        source: aces2,
        type: "fill", below: "traces", color: "#69591B", opacity: 0.69
      }]
    },
    height: 600, width: 1200
  };

  var layout235 = {
    
    mapbox: {
       style:"mapbox://styles/claudiocruz/ckw8fjedc1s8w15qnexl5vo2t",
      center: { lon: -7.85, lat: 39.55 },
      zoom: 5.3,
    },
    height: 600, width: 1200,
  }; 

  let data35 = [{
    featureidkey: 'properties.ACES',
    type: 'choroplethmapbox',
    locations: unpack(data, 'aces'), 
    /* text: unpack(data, 'aces', 'value'), */
    /* locations: ["AL", "AK", "AZ", "AR","ZA"], */
    z:unpack(data, 'value'),
    geojson: t,
    autocolorscale: false,
    colorscale: scl,
    below: "",
    hoverlabel:{
      namelength: -1
    }
  }];

  let data34 = [{
    type: 'scattermapbox',
    locationmode: 'country names',
    lon: unpack(data, 'long'),
    lat: unpack(data, 'lat'),
    hoverinfor: unpack(data, 'aces'),
    text: unpack(data, 'aces', 'value'),
    mode: 'markers',
    marker: {
      size: 18,
      opacity: 0.8,
      reversescale: true,
      autocolorscale: false,
      symbol: 'circle',
      line: {
        width: 1,
        color: 'rgb(102,102,102)'
      },
      colorscale: scl,
      cmin: 0,
      color: unpack(data, 'value'),
      colorbar: {
        title: ''
      }
    }
  }];


  function onTagChangeYear(event, values) {
    year = values.ano;
  }

  function onTagChangeMonth(event, values) {
    month = values.mes;
  }

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
            id='combo24'
            disableClearable
            options={anos}
            value={{ title: '' + year == 0 ? 'Sem Ano' : year + '', ano: year }}
            getOptionLabel={(option) => option.title}
            style={{ width: 150 }}
            onChange={onTagChangeYear}
            clearOnBlur={false}
            renderInput={params => (
              <TextField {...params} label={"Ano"} variant='outlined' />
            )}
          />}
        </Grid>
        <Grid item>
          {<Autocomplete
            id='combo24'
            disableClearable
            options={meses}
            value={{ title: '' + meses[month].title + '', mes: month }}
            getOptionLabel={(option) => option.title}
            style={{ width: 150 }}
            onChange={onTagChangeMonth}
            clearOnBlur={false}
            renderInput={params => (
              <TextField {...params} label={"Mês"} variant='outlined' />
            )}
          />}
        </Grid>
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={setData} >Carregar</Button>
        </Grid>
        <Grid item xs={12} style={{ height: 686, width: 800 }}>
          <br />
          <Plot data={data35}  layout={layout235}   config={{ mapboxAccessToken: "pk.eyJ1IjoiY2xhdWRpb2NydXoiLCJhIjoiY2t3Nnp3cTIyMDNtajJ1cW1qem5tY2xmMCJ9.1Wh7F0XuoJ7zHZYpXF1S0w", displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"]  }}/* layout={layout} *//* config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }} */ />
        </Grid>
      </Grid>

    </>


  );
}

let meses =
  [
    { title: 'Sem Mês', mes: 0 },
    { title: 'Janeiro', mes: 1 },
    { title: 'Fevereiro', mes: 2 },
    { title: 'Março', mes: 3 },
    { title: 'Abril', mes: 4 },
    { title: 'Maio', mes: 5 },
    { title: 'Junho', mes: 6 },
    { title: 'Julho', mes: 7 },
    { title: 'Agosto', mes: 8 },
    { title: 'Setembro', mes: 9 },
    { title: 'Outubro', mes: 10 },
    { title: 'Novembro', mes: 11 },
    { title: 'Dezembro', mes: 12 },
  ]

let anos = [
  { title: 'Sem Ano', ano: 0 },
  { title: '2021', ano: 2021 },
  { title: '2020', ano: 2020 },
  { title: '2019', ano: 2019 },
  { title: '2018', ano: 2018 },
  { title: '2017', ano: 2017 },
  { title: '2016', ano: 2016 },
  { title: '2015', ano: 2015 },
  { title: '2014', ano: 2014 },
]




  /*   let dataTeste = [{
      type: 'scattergeo',
      locationmode: 'country names',
      lon: unpack(data, 'long'),
      lat: unpack(data, 'lat'),
      hoverinfor: unpack(data, 'aces'),
      text: unpack(data, 'aces', 'value'),
      mode: 'markers',
      marker: {
        size: 18,
        opacity: 0.8,
        reversescale: true,
        autocolorscale: false,
        symbol: 'circle',
        line: {
          width: 1,
          color: 'rgb(102,102,102)'
        },
        colorscale: scl,
        cmin: 0,
        color: unpack(data, 'value'),
        colorbar: {
          title: ''
        }
      }
    }];
    
      let layout = {
    autosize: false,
    width: 1200,
    margin: {
      l: 5,
      r: 5,
      b: 5,
      t: 10,
      pad: 1,
      autoexpand: true
    },
    colorbar: true,
    geo: {
      projection: {
        type: "natural earth",
      },
      showcoastlines: true,
      fitbounds: 'locations',
      scope: 'europe',
      lonaxis: {
        range: [-20, 35],
        showgrid: true,
      },
      lataxis: {
        range: [30, 70],
        showgrid: true,
      },
      landcolor: 'rgb(217, 217, 100)',
      showland: false,
      countrywidth: 1,
      subunitwidth: 1,
      showcountries: true,
      showframe: true,
      showocean: true,
      oceancolor: 'rgb(223, 246, 249)',
    }
  };

  const config = {
    showLink: false,
    showLegend: false,
  };*/