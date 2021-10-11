import React, { useState, useEffect, useContext } from 'react';
import Plot from 'react-plotly.js';
import { Context } from '../app/Global';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import SelectBox from "../selectBox/SelectBox"

/* const data = [
  {
    type: "scatterpolar",
    r: [39, 28, 8, 7, 28, 23, 30, 40, 12, 23, 34, 45],
    theta: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
    fill: "toself",
    name: "A"
  },
  {
    type: "scatterpolar",
    r: [12, 12, 12, 12, 12, 12, 23, 23, 23, 23, 23, 23],
    theta: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
    fill: "toself",
    name: "B",
  },
  {
    type: "scatterpolar",
    r: [23, 54, 2, 53, 34, 42, 16, 34, 12, 12, 54, 45],
    theta: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
    fill: "toself",
    name: "C"
  }
]; */



export default function SimpleRadarChartTesting() {

  const [globalState, setGlobalState] = useContext(Context);
  useEffect(() => {
    const { indicador, subindicador } = globalState

    if (indicador != undefined && subindicador != undefined) {
      axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2020%2F01%2F01&end_date=2020%2F12%2F01`)
        .then(res => {
          const dataRows = JSON.parse(JSON.stringify(res.data));
          let tempo = subindicatorsAnual.includes(subindicador)
          for (var i = 0; i < dataRows.data.length; i++) {
            for (var j = 0; j < dataRows.data[i].x.length; j++) {
              dataRows.data[i].y[j] = renderSwitch(dataRows.data[i], j, tempo)
            }
          }
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
      theta: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"], r: dataRows.y, name: dataRows.aces, fill: "toself", type: "scatterpolar",
    })
  });

  function setData() {
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2020%2F01%2F01&end_date=2020%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        setGlobalState({
          indicador: indicador,
          subindicador: subindicador,
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data
        })
      })
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
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={setData} >Carregar</Button>
        </Grid>
        <Grid item xs={12} style={{ height: 686 }}>
          <Plot data={plotData} layout={layout} config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }} />
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
  width: 1200,
  height: 600,
};

const subindicatorsAnual = [
  'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm',
  'prctg_dm_com_exame_pes_ultimo_ano_norm',
  'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano'
]



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



/* // eslint-disable no-use-before-define
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../app/Global';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Plot from 'react-plotly.js';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import SelectBox from "../selectBox/SelectBox"

export default function SimpleLineChartTesting() {

  const [globalState, setGlobalState] = useContext(Context);

  useEffect(() => {
    const { indicador, subindicador } = globalState

    if (indicador != undefined && subindicador != undefined) {
      axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
        .then(res => {
          const dataRows = JSON.parse(JSON.stringify(res.data));
          let tempo = subindicatorsAnual.includes(subindicador)
          for (var i = 0; i < dataRows.data.length; i++) {
            for (var j = 0; j < dataRows.data[i].x.length; j++) {
              dataRows.data[i].y[j] = renderSwitch(dataRows.data[i], j, tempo)
            }
          }
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
      x: dataRows.x, y: dataRows.y, name: dataRows.aces, mode: 'lines',
      connectgaps: false
    })
  });

  function setData() {
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        setGlobalState({
          indicador: indicador,
          subindicador: subindicador,
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data
        })
      })
  }

  return (
    <div>

      <Grid container spacing={2}>
        <Grid item >
          <SelectBox type={1} />
        </Grid>
        <Grid item >
          <SelectBox type={2} />
        </Grid>
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={setData}>Carregar</Button>
        </Grid>
        <Grid item xs={12} style={{ height: 686 }}>
          <Plot
            data={plotData}
            layout={{ height: 670, hoverlabel: { namelength: -1 }, xaxis: { type: 'date', rangemode: "nonnegative", rangeslider: { thickness: 0.18, visible: true } }, yaxis: { autorange: true, fixedrange: false, rangemode: "nonnegative" } }}
            config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }}
            style={{ maxWidth: '100%' }}

          />
        </Grid>
      </Grid>

    </div>
  );

}



const subindicatorsAnual = [
  'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm',
  'prctg_dm_com_exame_pes_ultimo_ano_norm',
  'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano'
]


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
} */