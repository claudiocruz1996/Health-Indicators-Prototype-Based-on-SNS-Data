import React from "react";
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import axios from 'axios';
import SelectBox from "../selectBox/SelectBox"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import { teal, grey } from '@material-ui/core/colors';


const indicatorsArrayP = [
  { title: 'Hipertensao', indicador: 'hipertensao' },
  { title: 'Diabetes', indicador: 'diabetes' },
  { title: 'Saúde da mulher e da crianca', indicador: 'saude_da_mulher_e_crianca' },
  { title: 'Acesso a Consultas Medicas pela Populacao Inscrita', indicador: 'acesso_de_consultas_medicas_pela_populacao_inscrita' },
];


const subindicatorsArrayP = [
  { title: 'Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'cntg_hipertensos_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Hipertensos < 65 anos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Diabéticos c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm' },
  { title: 'Diabetes Mellitus c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'prctg_dm_ultima_hgba1c_8_0_norm' },
  { title: 'Diabéticos c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm' },
  { title: 'Diabetes Mellitus c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'prctg_dm_com_exame_pes_ultimo_ano_norm' },
  { title: 'teste', indicador: 'acesso_de_consultas_medicas_pela_populacao_inscrita', subindicator: 'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano' },
];

const subindicatorsAnual = ['cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm',
  'prctg_dm_com_exame_pes_ultimo_ano_norm',
  'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano']

export default class MyLineChart extends React.Component {
  constructor(props) {
    super(props);
    // Bind the this context to the handler function
    this.setIndicadorToState = this.setIndicadorToState.bind(this);
    this.setSubindicadorToState = this.setSubindicadorToState.bind(this);
    this.setData = this.setData.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.state = {
      indicador: "hipertensao",
      indicatorTitle: "Hipertensão",
      subindicador: "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
      subindicadorTitle: "Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses",
      dataset: "",
      rows: 0,
      data: [],
      flag: true,
      titleFlag: true,
    }
  }

  componentDidMount() {
    const { indicador, subindicador } = this.state
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = this.renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        this.setState({
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data
        });
      })
  }

  renderSwitch(data, j, t) {
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


  setIndicadorToState(indicadorFromChild, indicadorTitleFromChild) {
    this.setState({
      indicador: indicadorFromChild,
      indicatorTitle: indicadorTitleFromChild,
      subindicador: "",
      subindicadorTitle: "",
      flag: false,
      titleFlag: false
    });
  }

  setSubindicadorToState(subindicadorFromChild, subindicadorTitleFromChild) {
    this.setState({
      subindicador: subindicadorFromChild,
      subindicadorTitle: subindicadorTitleFromChild,
      flag: true,
      titleFlag: false
    });
  }

  setData() {
    const { indicador, subindicador } = this.state
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = this.renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        this.setState({
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data,
          titleFlag: true
        });
      })
  }

  render() {
    const { data, dataset, rows, indicador, indicatorTitle, subindicador, subindicadorTitle, flag, titleFlag } = this.state
    const plotData = []
    data.forEach(dataRows => {
      plotData.push({
        x: dataRows.x, y: dataRows.y, name: dataRows.aces, mode: 'lines',
        connectgaps: false
      })
    });




    return (
      <div>

        <Grid container spacing={2}>
          <Grid item >
            <SelectBox flag={flag} setIndicatorParent={this.setIndicadorToState} selectValues={indicatorsArrayP} indicatorName={indicador} indicatorTitle={indicatorTitle} type={1} />
          </Grid>
          <Grid item >
            <SelectBox flag={flag} setSubindicadorParent={this.setSubindicadorToState} selectValues={subindicatorsArrayP.filter((x) => x.indicador == indicador)} indicatorName={indicador} indicatorTitle={indicatorTitle} subindicadorName={subindicador} subindicadorTitle={subindicadorTitle} type={2} />
          </Grid>
          <Grid item >
            <Button style={{ height: 55 }} variant="contained" color="primary" endIcon={<Autorenew />} onClick={this.setData} >Carregar</Button>
          </Grid>

          <Grid item xs={12} style={{ height: 686 }}>
            <Plot
              data={plotData}
              layout={{ height: 670, title: titleFlag ? indicatorTitle + ': ' + subindicadorTitle : '', hoverlabel: { namelength: -1 }, xaxis: { type: 'date', rangemode: "nonnegative", rangeslider: { thickness: 0.18, visible: true } }, yaxis: { autorange: true, fixedrange: false, rangemode: "nonnegative" } }}
              config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }}
              style={{ maxWidth: '100%' }}

            />
          </Grid>
        </Grid>

      </div>
    );
  }
}

/*
import React from "react";
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import axios from 'axios';
import DoubleSelectBox from "../../components/selectBox/DoubleSelectBox"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import { teal, grey } from '@material-ui/core/colors';


const indicatorsArrayP = [
  { title: 'Hipertensao', indicador: 'hipertensao' },
  { title: 'Diabetes', indicador: 'diabetes' },
  { title: 'Saúde da mulher e da crianca', indicador: 'saude_da_mulher_e_crianca' },
  { title: 'Acesso a Consultas Medicas pela Populacao Inscrita', indicador: 'acesso_de_consultas_medicas_pela_populacao_inscrita' },
];


const subindicatorsArrayP = [
  { title: 'Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'cntg_hipertensos_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Hipertensos < 65 anos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Diabéticos c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm' },
  { title: 'Diabetes Mellitus c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'prctg_dm_ultima_hgba1c_8_0_norm' },
  { title: 'Diabéticos c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm' },
  { title: 'Diabetes Mellitus c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'prctg_dm_com_exame_pes_ultimo_ano_norm' },
  { title: 'teste', indicador: 'acesso_de_consultas_medicas_pela_populacao_inscrita', subindicator: 'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano' },
];

const subindicatorsAnual = ['cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm',
  'prctg_dm_com_exame_pes_ultimo_ano_norm',
  'cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano']

export default class MyLineChart extends React.Component {
  constructor(props) {
    super(props);
    // Bind the this context to the handler function
         this.setIndicadorToState = this.setIndicadorToState.bind(this);
        this.setSubindicadorToState = this.setSubindicadorToState.bind(this);
    this.setData = this.setData.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.state = {
      indicador: "hipertensao",
      indicatorTitle: "Hipertensão",
      subindicador: "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
      subindicadorTitle: "Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses",
      dataset: "",
      rows: 0,
      data: [],
      flag: true,
      titleFlag: true,
    }
  }

  componentDidMount() {
    const { indicador, subindicador } = this.state
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = this.renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        this.setState({
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data
        });
      })
  }

  renderSwitch(data, j, t) {
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

  setData(a) {
     const { indicador, subindicador } = this.state
    axios.get(`http://localhost:3030/test?indicator_name=` + indicador + `&subIndicator_name=` + subindicador + `&start_date=2013%2F01%2F01&end_date=2021%2F12%2F01`)
      .then(res => {
        const dataRows = JSON.parse(JSON.stringify(res.data));
        let tempo = subindicatorsAnual.includes(subindicador)
        for (var i = 0; i < dataRows.data.length; i++) {
          for (var j = 0; j < dataRows.data[i].x.length; j++) {
            dataRows.data[i].y[j] = this.renderSwitch(dataRows.data[i], j, tempo)
          }
        }
        this.setState({
          dataset: dataRows.dataset,
          rows: dataRows.rows,
          data: dataRows.data,
          titleFlag: true
        });
      })

    alert(a)
  }

  render() {
    const { data, dataset, rows, indicador, indicatorTitle, subindicador, subindicadorTitle, flag, titleFlag } = this.state
    const plotData = []
    data.forEach(dataRows => {
      plotData.push({
        x: dataRows.x, y: dataRows.y, name: dataRows.aces, mode: 'lines',
        connectgaps: false
      })
    });



    console.log("parent render");
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item >
            <DoubleSelectBox setDataParent={this.setData} indicador={indicador} subindicador={subindicador} />
          </Grid>
          <Grid item xs={12} style={{ height: 686 }}>
            <Plot
              data={plotData}
              layout={{ height: 670, title: indicatorTitle == '' & subindicadorTitle == '' ? '' : indicatorTitle + ': ' + subindicadorTitle, hoverlabel: { namelength: -1 }, xaxis: { type: 'date', rangemode: "nonnegative", rangeslider: { thickness: 0.18, visible: true } }, yaxis: { autorange: true, fixedrange: false, rangemode: "nonnegative" } }}
              config={{ responsive: true, displaylogo: false, modeBarButtonsToRemove: ["autoScale2d", "lasso2d", "select2d"] }}
              style={{ maxWidth: '100%' }}

            />
          </Grid>
        </Grid>

      </div>
    );
  }
}
 */