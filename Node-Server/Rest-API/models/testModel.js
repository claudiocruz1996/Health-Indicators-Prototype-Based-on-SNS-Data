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
  start_date: joi.date().format("YYYY/MM/DD").utc(),
  end_date: joi.date().format("YYYY/MM/DD").utc(),
})

module.exports = testModel
