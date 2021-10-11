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


const jsonTest = [
  {
    "value": 367.14,
    "aces": "ACES Almada-Seixal",
    "date": "2021-01-01",
    "lat": 38.6678522,
    "long": -9.1875777
  },
  {
    "value": 281.39,
    "aces": "ACES Arco Ribeirinho",
    "date": "2021-01-01",
    "lat": 38.6672076,
    "long": -9.0543329
  },
  {
    "value": 205.01,
    "aces": "ACES Estuario do Tejo",
    "date": "2021-01-01",
    "lat": 38.9528113,
    "long": -8.9911154
  },
  {
    "value": 351.94,
    "aces": "ACES Lisboa Norte",
    "date": "2021-01-01",
    "lat": 38.7396924,
    "long": -9.168506
  },
  {
    "value": 377.2,
    "aces": "ACES Oeste Norte",
    "date": "2021-01-01",
    "lat": 39.410844,
    "long": -9.1396215
  },
  {
    "value": 413.34,
    "aces": "ACES Alto Minho",
    "date": "2021-01-01",
    "lat": 41.7056054,
    "long": -8.8252713
  },
  {
    "value": 604.61,
    "aces": "ACES Cavado III - Barcelos e Esposende",
    "date": "2021-01-01",
    "lat": 41.5317419,
    "long": -8.6178922
  },
  {
    "value": 527.55,
    "aces": "ACES Grande Porto VI - Porto Oriental",
    "date": "2021-01-01",
    "lat": 41.1694498,
    "long": -8.6126428
  },
  {
    "value": 617.16,
    "aces": "ACES Tamega I - Baixo Tamega",
    "date": "2021-01-01",
    "lat": 41.2719719,
    "long": -8.0791631
  },
  {
    "value": 991.17,
    "aces": "ACES Tamega II - Vale do Sousa Sul",
    "date": "2021-01-01",
    "lat": 41.1548155,
    "long": -8.2163769
  },
  {
    "value": 938.86,
    "aces": "ACES Tamega III - Vale do Sousa Norte",
    "date": "2021-01-01",
    "lat": 41.2793583,
    "long": -8.2787457
  },
  {
    "value": 686.89,
    "aces": "ACES Sao Mamede",
    "date": "2021-01-01",
    "lat": 39.2967086,
    "long": -7.4284755
  },
  {
    "value": 393.85,
    "aces": "ACES Algarve I - Algarve Central",
    "date": "2021-01-01",
    "lat": 37.0274264,
    "long": -7.9395984
  },
  {
    "value": 387.86,
    "aces": "ACES Beira Interior Sul",
    "date": "2021-01-01",
    "lat": 39.8211367,
    "long": -7.5036651
  },
  {
    "value": 361.08,
    "aces": "ACES Lisboa Ocidental e Oeiras",
    "date": "2021-01-01",
    "lat": 38.6914388,
    "long": -9.3184304
  },
  {
    "value": 976.64,
    "aces": "ACES Alto Ave - Guimaraes, Vizela e Terras de Basto",
    "date": "2021-01-01",
    "lat": 41.4417064,
    "long": -8.1722408
  },
  {
    "value": 546.33,
    "aces": "ACES Grande Porto III - Maia e Valongo",
    "date": "2021-01-01",
    "lat": 41.2333945,
    "long": -8.6187474
  },
  {
    "value": 537.51,
    "aces": "ACES Grande Porto V - Porto Ocidental",
    "date": "2021-01-01",
    "lat": 41.1741353,
    "long": -8.6691662
  },
  {
    "value": 330.72,
    "aces": "ACES Baixo Alentejo",
    "date": "2021-01-01",
    "lat": 38.0153039,
    "long": -7.8627308
  },
  {
    "value": 647.43,
    "aces": "ACES Algarve III - Algarve Sotavento",
    "date": "2021-01-01",
    "lat": 37.383008,
    "long": -7.7293275
  },
  {
    "value": 536.93,
    "aces": "ACES Dao Lafoes",
    "date": "2021-01-01",
    "lat": 40.6565861,
    "long": -7.9124712
  },
  {
    "value": 310.34,
    "aces": "ACES Pinhal Interior Norte",
    "date": "2021-01-01",
    "lat": 40.1151262,
    "long": -8.2473136
  },
  {
    "value": 253.52,
    "aces": "ACES Arrabida",
    "date": "2021-01-01",
    "lat": 38.5324373,
    "long": -8.8627453
  },
  {
    "value": 229.56,
    "aces": "ACES Cascais",
    "date": "2021-01-01",
    "lat": 38.69904,
    "long": -9.3818008
  },
  {
    "value": 290.33,
    "aces": "ACES Loures-Odivelas",
    "date": "2021-01-01",
    "lat": 38.8012718,
    "long": -9.1137868
  },
  {
    "value": 237.67,
    "aces": "ACES Sintra",
    "date": "2021-01-01",
    "lat": 38.7519209,
    "long": -9.2753636
  },
  {
    "value": 836.45,
    "aces": "ACES Cavado II - Geres e Cabreira",
    "date": "2021-01-01",
    "lat": 41.6298661,
    "long": -8.3596897
  },
  {
    "value": 492.18,
    "aces": "ACES Grande Porto II - Gondomar",
    "date": "2021-01-01",
    "lat": 41.1738444,
    "long": -8.5612238
  },
  {
    "value": 525.99,
    "aces": "ACES Matosinhos",
    "date": "2021-01-01",
    "lat": 41.1918541,
    "long": -8.6590693
  },
  {
    "value": 268.37,
    "aces": "ACES Algarve II - Algarve Barlavento",
    "date": "2021-01-01",
    "lat": 37.1387554,
    "long": -8.5445093
  },
  {
    "value": 537,
    "aces": "ACES Baixo Vouga",
    "date": "2021-01-01",
    "lat": 40.6405055,
    "long": -8.6537539
  },
  {
    "value": 276.55,
    "aces": "ACES Cova da Beira",
    "date": "2021-01-01",
    "lat": 40.2677741,
    "long": -7.4995083
  },
  {
    "value": 85.08,
    "aces": "ACES Amadora",
    "date": "2021-01-01",
    "lat": 38.7573081,
    "long": -9.23429
  },
  {
    "value": 592,
    "aces": "ACES Leziria",
    "date": "2021-01-01",
    "lat": 39.2371689,
    "long": -8.6908895
  },
  {
    "value": 138.13,
    "aces": "ACES Lisboa Central",
    "date": "2021-01-01",
    "lat": 38.7306317,
    "long": -9.1510414
  },
  {
    "value": 338.88,
    "aces": "ACES Oeste Sul",
    "date": "2021-01-01",
    "lat": 39.0917759,
    "long": -9.2600341
  },
  {
    "value": 537.48,
    "aces": "ACES Alto Tras-os-Montes - Alto Tamega e Barroso",
    "date": "2021-01-01",
    "lat": 41.741781,
    "long": -7.4731648
  },
  {
    "value": 629.15,
    "aces": "ACES Ave - Famalicao",
    "date": "2021-01-01",
    "lat": 41.3835805,
    "long": -8.4157518
  },
  {
    "value": 598.85,
    "aces": "ACES Grande Porto IV - Povoa do Varzim e Vila do Conde",
    "date": "2021-01-01",
    "lat": 41.355519,
    "long": -8.746653
  },
  {
    "value": 321.49,
    "aces": "ACES Alentejo Central",
    "date": "2021-01-01",
    "lat": 38.8442031,
    "long": -7.5826619
  },
  {
    "value": 411.19,
    "aces": "ACES Baixo Mondego",
    "date": "2021-01-01",
    "lat": 40.2150023,
    "long": -8.4071805
  },
  {
    "value": 238.64,
    "aces": "ACES Guarda",
    "date": "2021-01-01",
    "lat": 40.5353285,
    "long": -7.2724426
  },
  {
    "value": 386.61,
    "aces": "ACES Pinhal Interior Sul",
    "date": "2021-01-01",
    "lat": 39.7510898,
    "long": -7.9203657
  },
  {
    "value": 452.19,
    "aces": "ACES Medio Tejo",
    "date": "2021-01-01",
    "lat": 39.478072,
    "long": -8.5404429
  },
  {
    "value": 463.85,
    "aces": "ACES Alto Tras-os-Montes - Nordeste",
    "date": "2021-01-01",
    "lat": 41.8069684,
    "long": -6.7587977
  },
  {
    "value": 897,
    "aces": "ACES Cavado I - Braga",
    "date": "2021-01-01",
    "lat": 41.5518714,
    "long": -8.4126362
  },
  {
    "value": 386.57,
    "aces": "ACES Douro I - Marao e Douro Norte",
    "date": "2021-01-01",
    "lat": 41.2968711,
    "long": -7.7483727
  },
  {
    "value": 604.63,
    "aces": "ACES Douro II - Douro Sul",
    "date": "2021-01-01",
    "lat": 41.0953745,
    "long": -7.8123805
  },
  {
    "value": 541.22,
    "aces": "ACES Entre Douro e Vouga I - Feira e Arouca",
    "date": "2021-01-01",
    "lat": 40.9263169,
    "long": -8.5478813
  },
  {
    "value": 654.66,
    "aces": "ACES Entre Douro e Vouga II - Aveiro Norte",
    "date": "2021-01-01",
    "lat": 40.8472225,
    "long": -8.4656674
  },
  {
    "value": 854.07,
    "aces": "ACES Grande Porto I - Santo Tirso e Trofa",
    "date": "2021-01-01",
    "lat": 41.3469246,
    "long": -8.4822648
  },
  {
    "value": 426.8,
    "aces": "ACES Grande Porto VII - Gaia",
    "date": "2021-01-01",
    "lat": 41.1278433,
    "long": -8.580396
  },
  {
    "value": 560.38,
    "aces": "ACES Grande Porto VIII - Espinho/Gaia",
    "date": "2021-01-01",
    "lat": 41.0022421,
    "long": -8.642018
  },
  {
    "value": 353.33,
    "aces": "ACES Alentejo Litoral",
    "date": "2021-01-01",
    "lat": 38.3841359,
    "long": -8.5132031
  },
  {
    "value": 440.33,
    "aces": "ACES Pinhal Litoral",
    "date": "2021-01-01",
    "lat": 39.7495331,
    "long": -8.807683
  }
]


export default function SimpleMapChart() {

  const [globalState, setGlobalState] = useContext(Context);

  useEffect(() => {
    const { indicador, subindicador } = globalState

    if (indicador != undefined && subindicador != undefined) {
      axios.get(`http://localhost:3030/getMapInfo?indicator_name=hipertensao&subIndicator_name=cntg_hipertensos_pa_menor_150_90_mmhg_n_norm&start_date=2021%2F01%2F01&end_date=2021%2F01%2F01`)
        .then(res => {
          const dataRows = JSON.parse(JSON.stringify(res.data));
          /* let tempo = subindicatorsAnual.includes(subindicador)
          for (var i = 0; i < dataRows.data.length; i++) {
            for (var j = 0; j < dataRows.data[i].x.length; j++) {
              dataRows.data[i].y[j] = renderSwitch(dataRows.data[i], j, tempo)
            }
          } */
          setGlobalState({
            indicador: indicador,
            subindicador: subindicador,
            dataset: dataRows.dataset,
            rows: dataRows.rows,
            data: dataRows.data
          })
        })
    }

  }, []);

  const { data, dataset, rows, indicador, subindicador } = globalState
  const plotData = []
  data.forEach(dataRows => {
    plotData.push({
      cnt: 'dasd',
    })
  });

  /*   console.log(plotData)
  
    const datae = [{
      type: 'scattergeo',
      locationmode: 'country names',
      lon: [9.189510],
      lat: [45.4642715],
      text: 'Milano',
      marker_color: 'red',
      marker_size: 100
    }] */



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
            id='combo-box-demo'
            disableClearable
            options={[
              { title: '2021', indicador: 'hipertensao' },
              { title: '2020', indicador: 'diabetes' },
              { title: '2019', indicador: 'saude_da_mulher_e_crianca' },
            ]}
            value={{ title: "2019" }}
            getOptionLabel={(option) => option.title}
            style={{ width: 100 }}
            renderInput={params => (
              <TextField {...params} label={"Ano"} variant='outlined' />
            )}
          />}
        </Grid>
        <Grid item>
          {<Autocomplete
            id='combo-box-demo2'
            disableClearable
            options={[
              { title: 'Janeiro', indicador: 'hipertensao' },
              { title: 'Fevereiro', indicador: 'diabetes' },
              { title: 'Março', indicador: 'saude_da_mulher_e_crianca' },
            ]}
            value={{ title: "Janeiro" }}
            getOptionLabel={(option) => option.title}
            style={{ width: 150 }}
            renderInput={params => (
              <TextField {...params} label={"Mês"} variant='outlined' />
            )}
          />}
        </Grid>
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} >Carregar</Button>
        </Grid>
        <Grid item xs={12} style={{ height: 686, width: 800 }}>
          <br />
          <Plot data={dataTeste} layout={layout} config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }} />
        </Grid>
      </Grid>

    </>


  );
}

function unpack(rows, key, sndkey) {

  return rows.map(function (row) {
    return sndkey == null ? row[key] : row[sndkey] + " - " + row[key];
  });
}

const scl = [[0, 'rgb(0, 150, 136)'], [0.35, 'rgb(38, 166, 153)'], [0.5, 'rgb(79, 183, 172)'], [0.6, 'rgb(121, 200, 192)'], [0.7, 'rgb(173, 221, 216)'], [1, 'rgb(238, 248, 247)']];

var dataTeste = [{
  type: 'scattergeo',
  locationmode: 'country names',
  lon: unpack(jsonTest, 'long'),
  lat: unpack(jsonTest, 'lat'),
  hoverinfor: unpack(jsonTest, 'aces'),
  text: unpack(jsonTest, 'aces', 'value'),
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
    color: unpack(jsonTest, 'value'),
    colorbar: {
      title: ''
    }
  }
}];


var layout = {
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

/* const layout = {

  title: 'teste',
  colorbar: true,
  geo: {
    scope: 'europe',
    //resolution: 50,
    lonaxis_rang: [6.6, 18.4],
    lataxis_range: [35.47, 47.25],
    landcolor: 'rgb(217, 217, 217)'
  }
} */

const config = {
  showLink: false,
  showLegend: false,
};


/* const subindicatorsAnual = [
  'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm',
  'prctg_dm_com_exame_pes_ultimo_ano_norm',
  'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano'
] */



function renderSwitch(data, j, t) {
  let value = 0;
  if (!t) {
    if (data.x[j].includes('-01-01') || data.x[j].includes('-07-01')) {
      value = data.y[j]
    } else if (data.x[j].includes('-02-01') || data.x[j].includes('-08-01')) {
      value = data.y[j] - data.y[j - 1];
    } else if (data.x[j].includes('-03-01') || data.x[j].includes('-09-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2];
    } else if (data.x[j].includes('-04-01') || data.x[j].includes('-10-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3];
    } else if (data.x[j].includes('-05-01') || data.x[j].includes('-11-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4];
    } else if (data.x[j].includes('-06-01') || data.x[j].includes('-12-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5];
    }
  } else {
    if (data.x[j].includes('-01-01')) {
      value = data.y[j]
    } else if (data.x[j].includes('-02-01')) {
      value = data.y[j] - data.y[j - 1];
    } else if (data.x[j].includes('-03-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2];
    } else if (data.x[j].includes('-04-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3];
    } else if (data.x[j].includes('-05-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4];
    } else if (data.x[j].includes('-06-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5];
    } else if (data.x[j].includes('-07-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6];
    } else if (data.x[j].includes('-08-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6] - data.y[j - 7];
    } else if (data.x[j].includes('-09-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6] - data.y[j - 7] - data.y[j - 8];
    } else if (data.x[j].includes('-10-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6] - data.y[j - 7] - data.y[j - 8] - data.y[j - 9];
    } else if (data.x[j].includes('-11-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6] - data.y[j - 7] - data.y[j - 8] - data.y[j - 9] - data.y[j - 10];
    } else if (data.x[j].includes('-12-01')) {
      value = data.y[j] - data.y[j - 1] - data.y[j - 2] - data.y[j - 3] - data.y[j - 4] - data.y[j - 5] - data.y[j - 6] - data.y[j - 7] - data.y[j - 8] - data.y[j - 9] - data.y[j - 10] - data.y[j - 11];
    }
  }
  return value
}

