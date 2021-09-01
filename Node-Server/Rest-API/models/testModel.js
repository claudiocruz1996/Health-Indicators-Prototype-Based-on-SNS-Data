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
      "cntg_hipertensos_pa_menor_150_90_mmhg_n",
      "prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm",
      "cntg_utentes_com_hgba1c_inferior_ou_igual_8_0_norm",
      "prctg_dm_ultima_hgba1c_8_0_norm",
      "cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano_norm",
      "prctg_dm_com_exame_pes_ultimo_ano_norm",
      "cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano"
    ),
  start_date: joi.date().format("YYYY/MM/DD").utc(),
  end_date: joi.date().format("YYYY/MM/DD").utc(),
})

module.exports = testModel
