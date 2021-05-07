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

module.exports = {
  hipertensao,
  diabetes,
}
