const joi = require("joi").extend(require("@joi/date"))

const testModel = joi.object().keys({
  indicator_name: joi
    .string()
    .valid(
      "hipertensao",
      "diabetes",
      "saude_da_mulher_e_crianca",
      "rastreios_oncologicos",
      "registo_de_testamentos_vitais",
      "referenciacoes_soep_emitidas_nos_centros_de_saude",
      "utentes_inscritos_em_cuidados_de_saude_primarios",
      "evolucao_do_numero_de_unidades_funcionais",
      "evolucao_dos_contactos_de_enfermagem_nos_csp",
      "acesso_de_consultas_medicas_pela_populacao_inscrita",
      "evolucao_das_consultas_medicas_nos_csp"
    )
    .required(),
  subIndicator_name: joi
    .string()
    .valid(
      "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
      "prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm",
      "cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm",
      "prctg_dm_ultima_hgba1c_8_0_norm",
      "cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm",
      "prctg_dm_com_exame_pes_ultimo_ano_norm",
      "cntg_r_nasc_consulta_vigil_ate_28_dias_vida_norm",
      "prctg_r_nasc_consulta_vigil_ate_28_dias_vida_norm",
      "cntg_r_nasc_domicilio_enf_ate_15_dia_vida_norm",
      "prctg_r_nasc_domicilio_enf_ate_15_dia_vida_norm",
      "cntg_nmr_contactos_enfermagem_nao_presenciais_norm",
      "cntg_mulheres_registo_de_mamogr_ultimos_dois_anos_norm",
      "prctg_mulheres_50_70_anos_mamogr_dois_anos_norm",
      "cntg_mulheres_colpocitologia_atualizada_norm",
      "prctg_mulheres_25_60_anos_colpocitologia_atualizada_norm",
      "cntg_utentes_rastreio_cancro_cr_efetuado_norm",
      "prctg_utentes_50_75_anos_rastreio_cancro_cr_norm",
      "cntg_consultas_nao_presenciais_ou_inespecificas_norm",
      "cntg_consultas_medicas_presencias_norm",
      "cntg_consultas_medicas_ao_domicilio_norm",
      "cntg_total_usf_norm",
      "cntg_nmr_contactos_enfermagem_nao_presenciais_norm",
      "cntg_nmr_contactos_enfermagem_presenciais_norm"
    ).required(),
  year: joi.date().format("YYYY").utc().required(),
})

module.exports = testModel
