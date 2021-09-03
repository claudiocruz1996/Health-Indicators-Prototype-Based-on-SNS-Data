// eslint-disable no-use-before-define 
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../app/Global';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Select } from '@material-ui/core';




export default function SelectBox({ type }) {

  const [globalState, setGlobalState] = useContext(Context);
  const { data, dataset, rows, indicador, subindicador } = globalState

  let mainTitle = ""
  let options = []
  let defaultValue = {}
  let widthComponent = 500;

  if (type == 1) {
    mainTitle = "Indicador"
    options = indicatorsArray
    defaultValue = indicatorsArray.filter(x => x.indicador == indicador)[0]
  } else {
    if (subindicador == "") {
      mainTitle = "Subindicador"
      options = subindicatorsArray.filter(x => x.indicador == indicador)
      defaultValue = { title: "Escolha o subindicador que pertende vizualisar." }
      widthComponent = 700
    } else {
      mainTitle = "Subindicador"
      options = subindicatorsArray.filter(x => x.indicador == indicador)
      defaultValue = subindicatorsArray.filter(x => x.subindicator == subindicador)[0]
      widthComponent = 700
    }

  }


  function onTagsChange(event, values) {
    if (type == 1) {
      setGlobalState(
        {
          indicador: values.indicador,
          subindicador: "",
          dataset: dataset,
          rows: rows,
          data: data
        }
      )
    } else {
      setGlobalState(
        {
          indicador: indicador,
          subindicador: values.subindicator,
          dataset: dataset,
          rows: rows,
          data: data
        }
      )
    }

  }

  return (
    <div>
      {<Autocomplete
        id='combo-box-demo'
        disableClearable
        options={options}
        value={defaultValue}
        getOptionLabel={(option) => option.title}
        style={{ width: widthComponent }}
        onChange={onTagsChange}
        renderInput={params => (
          <TextField {...params} label={mainTitle} variant='outlined' />
        )}
      />}
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