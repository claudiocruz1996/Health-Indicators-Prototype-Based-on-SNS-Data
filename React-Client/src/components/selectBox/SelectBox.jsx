// eslint-disable no-use-before-define 
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../app/Global';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Select } from '@material-ui/core';




export default function SelectBox({ type }) {

  const [globalState, setGlobalState] = useContext(Context);
  const { data, dataset, rows, indicador, subindicador, ano, mes } = globalState

  let mainTitle = ""
  let options = []
  let defaultValue = {}
  let widthComponent = 400;

  if (type == 1) {
    mainTitle = "Indicador"
    options = indicatorsArray
    defaultValue = indicatorsArray.filter(x => x.indicador == indicador)[0]
  } else {
    if (subindicador == "") {
      mainTitle = "Subindicador"
      options = subindicatorsArray.filter(x => x.indicador == indicador)
      defaultValue = { title: "Escolha o subindicador que pertende vizualisar." }
      widthComponent = 600
    } else {
      mainTitle = "Subindicador"
      options = subindicatorsArray.filter(x => x.indicador == indicador)
      defaultValue = subindicatorsArray.filter(x => x.subindicator == subindicador)[0]
      widthComponent = 600
    }

  }


  function onTagsChange(event, values) {
    if (type == 1) {
      setGlobalState(
        {
          indicador: values.indicador,
          subindicador: "",
          ano: ano,
          mes: mes,
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
          ano: ano,
          mes: mes,
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
  { title: 'Atividade do Programa de Hipertensão', indicador: 'hipertensao' },
  { title: 'Atividade do Programa de Diabetes', indicador: 'diabetes' },
  { title: 'Saúde da Mulher e Criança', indicador: 'saude_da_mulher_e_crianca' },
  { title: 'Rastreios Oncológicos', indicador: 'rastreios_oncologicos' },
  { title: 'Consultas Médicas nos CSP', indicador: 'evolucao_das_consultas_medicas_nos_csp' },
  { title: 'Unidades Funcionais', indicador: 'evolucao_do_numero_de_unidades_funcionais' },
  { title: 'Contactos de Enfermagem nos CSP', indicador: 'evolucao_dos_contactos_de_enfermagem_nos_csp' },
];


const subindicatorsArray = [
  { title: 'Hipertensos c/ pressão arterial inferior a 150/90 mmHg', indicador: 'hipertensao', subindicator: 'cntg_hipertensos_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Hipertensos < 65 anos c/ pressão arterial inferior a 150/90 mmHg', indicador: 'hipertensao', subindicator: 'prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm' },
  { title: 'Diabéticos c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm' },
  { title: 'Diabetes Mellitus c/ último resultado de HgbA1c inferior ou igual a 8,0%', indicador: 'diabetes', subindicator: 'prctg_dm_ultima_hgba1c_8_0_norm' },
  { title: 'Diabéticos c/ exame dos pés realizado', indicador: 'diabetes', subindicator: 'cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm' },
  { title: 'Diabetes Mellitus c/ exame dos pés', indicador: 'diabetes', subindicator: 'prctg_dm_com_exame_pes_ultimo_ano_norm' },
  { title: 'Recém-nascidos c/ pelo menos 1 consulta médica de vigilância nos primeiros 28 dias de vida.', indicador: 'saude_da_mulher_e_crianca', subindicator: 'cntg_r_nasc_consulta_vigil_ate_28_dias_vida_norm' },
  { title: 'Recém-nascidos c/ consulta médica de vigilância até 28 dias de vida', indicador: 'saude_da_mulher_e_crianca', subindicator: 'prctg_r_nasc_consulta_vigil_ate_28_dias_vida_norm' },
  { title: 'Recém-nascidos c/ pelo menos um domicílio de enfermagem durante os primeiros 15 dias de vida', indicador: 'saude_da_mulher_e_crianca', subindicator: 'cntg_r_nasc_domicilio_enf_ate_15_dia_vida_norm' },
  { title: 'Recém-nascidos c/ domicílio de enfermagem durante os primeiros 15 dias de vida', indicador: 'saude_da_mulher_e_crianca', subindicator: 'prctg_r_nasc_domicilio_enf_ate_15_dia_vida_norm' },
  { title: 'Mulheres c/ registo de mamografia nos últimos dois anos', indicador: 'rastreios_oncologicos', subindicator: 'cntg_mulheres_registo_de_mamogr_ultimos_dois_anos_norm' },
  { title: 'Mulheres [50; 70[ c/ registo de mamografia nos últimos dois anos', indicador: 'rastreios_oncologicos', subindicator: 'prctg_mulheres_50_70_anos_mamogr_dois_anos_norm' },
  { title: 'Mulheres c/ colpocitologia atualizada ', indicador: 'rastreios_oncologicos', subindicator: 'cntg_mulheres_colpocitologia_atualizada_norm' },
  { title: 'Mulheres [25; 60[ c/ colpocitologia atualizada', indicador: 'rastreios_oncologicos', subindicator: 'prctg_mulheres_25_60_anos_colpocitologia_atualizada_norm' },
  { title: 'Utentes inscritos c/ rastreio do cancro do colon e reto efetuado', indicador: 'rastreios_oncologicos', subindicator: 'cntg_utentes_rastreio_cancro_cr_efetuado_norm' },
  { title: 'Utentes [50; 75[  c/ rastreio do cancro do colon e reto efetuado', indicador: 'rastreios_oncologicos', subindicator: 'prctg_utentes_50_75_anos_rastreio_cancro_cr_norm' },
  { title: 'Evolução mensal das consultas médicas não presenciais/inespecíficas', indicador: 'evolucao_das_consultas_medicas_nos_csp', subindicator: 'cntg_consultas_nao_presenciais_ou_inespecificas_norm' },
  { title: 'Evolução mensal das consultas médicas presenciais', indicador: 'evolucao_das_consultas_medicas_nos_csp', subindicator: 'cntg_consultas_medicas_presencias_norm' },
  { title: 'Evolução mensal das consultas médicas ao domicílio nos CSP', indicador: 'evolucao_das_consultas_medicas_nos_csp', subindicator: 'cntg_consultas_medicas_ao_domicilio_norm' },
  { title: 'Distribuição das unidades funcionais nos CSP', indicador: 'evolucao_do_numero_de_unidades_funcionais', subindicator: 'cntg_total_usf_norm' },
  { title: 'Número de contactos de enfermagem não presenciais', indicador: 'evolucao_dos_contactos_de_enfermagem_nos_csp', subindicator: 'cntg_nmr_contactos_enfermagem_nao_presenciais_norm' },
  { title: 'Número de contactos de enfermagem presenciais', indicador: 'evolucao_dos_contactos_de_enfermagem_nos_csp', subindicator: 'cntg_nmr_contactos_enfermagem_presenciais_norm' },
];
