const sql = require("sql")
const mapping = require("./maps")

/**
 * This variable define the hypertension Data Model used to convert JSON data into a insert query statement
 */
const hipertensao = sql.define({
  name: "hipertensao",
  columns: Object.values(mapping["hipertensao"]),
})

/**
 * This variable define the diabetes Data Model used to convert JSON data into a insert query statement
 */
const diabetes = sql.define({
  name: "diabetes",
  columns: Object.values(mapping["diabetes"]),
})

/**
 * This variable define the health of women and children Data Model used to convert JSON data into a insert query statement
 */
const saude_da_mulher_e_crianca = sql.define({
  name: "saude_da_mulher_e_crianca",
  columns: Object.values(mapping["saude_da_mulher_e_crianca"]),
})

/**
 * This variable define the cancer screenings Data Model used to convert JSON data into a insert query statement
 */
const rastreios_oncologicos = sql.define({
  name: "rastreios_oncologicos",
  columns: Object.values(mapping["rastreios_oncologicos"]),
})

/**
 * This variable define the registration of vital wills Data Model used to convert JSON data into a insert query statement
 */
const registo_de_testamentos_vitais = sql.define({
  name: "registo_de_testamentos_vitais",
  columns: Object.values(mapping["registo_de_testamentos_vitais"]),
})

/**
 * This variable define soep references issued in health centers Data Model used to convert JSON data into a insert query statement
 */
const referenciacoes_soep_emitidas_nos_centros_de_saude = sql.define({
  name: "referenciacoes_soep_emitidas_nos_centros_de_saude",
  columns: Object.values(mapping["referenciacoes_soep_emitidas_nos_centros_de_saude"]),
})

/**
 * This variable define users registered in primary health care Data Model used to convert JSON data into a insert query statement
 */
const utentes_inscritos_em_cuidados_de_saude_primarios = sql.define({
  name: "utentes_inscritos_em_cuidados_de_saude_primarios",
  columns: Object.values(mapping["utentes_inscritos_em_cuidados_de_saude_primarios"]),
})
/**
 * This variable define users registered in primary health care Data Model used to convert JSON data into a insert query statement
 */
const evolucao_do_numero_de_unidades_funcionais = sql.define({
  name: "evolucao_do_numero_de_unidades_funcionais",
  columns: Object.values(mapping["evolucao_do_numero_de_unidades_funcionais"]),
})
/**
 * This variable define the nursing contacts in primary health care Data Model used to convert JSON data into a insert query statement
 */
const evolucao_dos_contactos_de_enfermagem_nos_csp = sql.define({
  name: "evolucao_dos_contactos_de_enfermagem_nos_csp",
  columns: Object.values(mapping["evolucao_dos_contactos_de_enfermagem_nos_csp"]),
})
/**
 * This variable define the access to medical appointments by the enrolled population Data Model used to convert JSON data into a insert query statement
 */
const acesso_de_consultas_medicas_pela_populacao_inscrita = sql.define({
  name: "acesso_de_consultas_medicas_pela_populacao_inscrita",
  columns: Object.values(mapping["acesso_de_consultas_medicas_pela_populacao_inscrita"]),
})
/**
 * This variable define the medical appointments in primary health care Data Model used to convert JSON data into a insert query statement
 */
const evolucao_das_consultas_medicas_nos_csp = sql.define({
  name: "evolucao_das_consultas_medicas_nos_csp",
  columns: Object.values(mapping["evolucao_das_consultas_medicas_nos_csp"]),
})

module.exports = {
  hipertensao,
  diabetes,
  saude_da_mulher_e_crianca,
  rastreios_oncologicos,
  registo_de_testamentos_vitais,
  referenciacoes_soep_emitidas_nos_centros_de_saude,
  utentes_inscritos_em_cuidados_de_saude_primarios,
  evolucao_do_numero_de_unidades_funcionais,
  evolucao_dos_contactos_de_enfermagem_nos_csp,
  acesso_de_consultas_medicas_pela_populacao_inscrita,
  evolucao_das_consultas_medicas_nos_csp,
}
