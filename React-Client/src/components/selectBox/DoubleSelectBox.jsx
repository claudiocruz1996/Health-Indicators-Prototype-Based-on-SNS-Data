// eslint-disable no-use-before-define 
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Select } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Autorenew } from '@material-ui/icons';
import { teal, grey } from '@material-ui/core/colors';


export default function ComboBox({ setDataParent, indicador, subindicador }) {

  let teste = indicador

  function onTagsChangeClean(event, values) {
    teste = values.indicador
  }

  function onTagsChange(event, values) {
    alert("b")
  }

  function sendData(event, values) {
    alert("manda dados para o pai")
    setDataParent("testes")
  }



  return (
    <div>
      <Grid container spacing={2}>
        <Grid item >
          <Autocomplete
            id="combo-box-demo"
            disableClearable
            options={indicatorsArray}
            value={indicatorsArray.filter(x => x.indicador == indicador)[0]}
            getOptionLabel={(option) => option.title}
            style={{ width: 500 }}
            onChange={onTagsChangeClean}
            renderInput={(params) => <TextField {...params} label="Indicador" variant="outlined" />}
          />
        </Grid>

        <Grid item >
          <Autocomplete
            id="combo-box-demo2"
            disableClearable
            options={subindicatorsArray.filter(x => x.indicador == teste)}
            value={subindicatorsArray.filter(x => x.subindicator == subindicador)[0]}
            getOptionLabel={(option) => option.title}
            style={{ width: 700 }}
            onChange={onTagsChange}
            renderInput={(params) => <TextField {...params} label="Subindicador" variant="outlined" />}
          />
        </Grid>
        <Grid item >
          <Button style={{ height: 55 }} variant="contained" color="primary" onClick={sendData} endIcon={<Autorenew />} >Carregar</Button>
        </Grid>
      </Grid>
    </div>
  );
}


const indicatorsArray = [
  { title: 'Hipertensao', indicador: 'hipertensao' },
  { title: 'Diabetes', indicador: 'diabetes' },
  { title: 'Saúde da mulher e da crianca', indicador: 'saude_da_mulher_e_crianca' },
];


const subindicatorsArray = [
  { title: 'Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'cntg_hipertensos_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Hipertensos < 65 anos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador: 'hipertensao', subindicator: 'prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Diabéticos c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm' },
  { title: 'Diabetes Mellitus c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'prctg_dm_ultima_hgba1c_8_0_norm' },
  { title: 'Diabéticos c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm' },
  { title: 'Diabetes Mellitus c/ exame dos pés realizado no último ano', indicador: 'diabetes', subindicator: 'prctg_dm_com_exame_pes_ultimo_ano_norm' },
]; 