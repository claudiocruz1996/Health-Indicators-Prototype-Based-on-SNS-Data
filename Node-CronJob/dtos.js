const sql = require("sql")
const mapping = require("../Node-CronJob/maps")

const hipertensao = sql.define({
  name: "hipertensao",
  columns: Object.values(mapping["hipertensao"]),
})

const diabetes = sql.define({
  name: "diabetes",
  columns: Object.values(mapping["diabetes"]),
})

module.exports = {
  hipertensao,
  diabetes,
}
