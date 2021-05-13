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

module.exports = {
  hipertensao,
  diabetes,
  saude_da_mulher_e_crianca,
  rastreios_oncologicos,
  registo_de_testamentos_vitais,
  referenciacoes_soep_emitidas_nos_centros_de_saude,
}
