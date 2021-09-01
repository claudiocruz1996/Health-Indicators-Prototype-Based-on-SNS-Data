// eslint-disable no-use-before-define 
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Select } from '@material-ui/core';


export default function ComboBox({ flag, setIndicatorParent, setSubindicadorParent, selectValues, indicatorName, indicatorTitle, subindicadorName, subindicadorTitle, type }) {

  /*  const [indicator, setIndicator] = useState('');
   const [subindicator, setSubindicator] = useState(''); */

  let mainTitle = "Indicador"
  let options = selectValues
  let defaultValue = {}
  let widthComponent = 500;

  if (type == 1) {
    defaultValue = { title: indicatorTitle, indicador: indicatorName }
  } else {
    mainTitle = "Subindicator"
    widthComponent = 700
    defaultValue = flag ? { title: selectValues[0].title, indicador: selectValues[0].indicador, subindicator: selectValues[0].subindicator } : {}
  }

  //alert("flag :" + flag + " " + "selectValues :" + selectValues + " " + "indicatorName :" + indicatorName + " " + "indicatorTitle :" + indicatorTitle + " " + "type :" + indicatorTitle + " ")

  //

  /*
    if(type == 2){
      options =  subindicatorsArray.filter((x) => x.indicador == indicatorName)
      //alert("title: "+options[0].title+ "\nindicador: "+ options[0].indicador+"\nsubindicator: "+ options[0].subindicator)
      defaultValue =  { title: options[0].title, indicador:options[0].indicador, subindicator: options[0].subindicator }
      widthComponent = 700;
    }else{
       options = indicatorsArray;
       defaultValue = { title: indicatorTitle, indicador: indicatorName}
    } */
  /*   useEffect(() => {
      console.log(defaultValue.title)
       if(type==1){
        setIndicator({
          title: indicatorTitle,
          indicador: indicatorName
        })
      }else{
        setSubindicator({
          title: subindicadorTitle,
          indicador:  indicatorName,
          subindicator: subindicadorName
        })
      } 
    }, []); */

  function onTagsChange(event, values) {
    if (type == 1) {
      setIndicatorParent(values.indicador, values.title)
    } else {
      setSubindicadorParent(values.subindicator, values.title)
    }

  }
  console.log("child render");
  return (
    <div>
      <Autocomplete
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
      />
    </div>
  );

}
/*
const indicatorsArray = [
  { title: 'Hipertensao', indicador: 'hipertensao' },
  { title: 'Diabetes', indicador: 'diabetes' },
  { title: 'Saúde da mulher e da crianca', indicador: 'saude_da_mulher_e_crianca' },
];


const subindicatorsArray = [
  { title: 'Hipertensos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador:'hipertensao', subindicator: 'cntg_hipertensos_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Hipertensos < 65 anos c/ pressão arterial inferior a 150/90 mmHg nos últimos 6 meses', indicador:'hipertensao', subindicator: 'prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Diabéticos c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador:'diabetes', subindicator: 'cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm' },
  { title: 'Diabetes Mellitus c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador:'diabetes', subindicator: 'prctg_dm_ultima_hgba1c_8_0_norm' },
  { title: 'Diabéticos c/ exame dos pés realizado no último ano', indicador:'diabetes', subindicator: 'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm' },
  { title: 'Diabetes Mellitus c/ exame dos pés realizado no último ano', indicador:'diabetes', subindicator: 'prctg_dm_com_exame_pes_ultimo_ano_norm' },
]; */