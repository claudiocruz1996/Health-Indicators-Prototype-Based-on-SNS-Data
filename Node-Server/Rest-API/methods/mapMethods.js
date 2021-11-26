const mapAcessDatabase = require("../database/mapAcessDatabase")
const moment = require("moment")
/**
 *
 * @param {*} params
 */
async function mapMethods(params) {
  try {
    let response
    const obj = { dataset: "dataset", rows: 0, data: [] }

    response = await mapAcessDatabase.getDataFrom(params.indicator_name, params.subIndicator_name, params.year, params.month)
    console.log(`[${params.indicator_name}] -> getDataFrom ${params.year}/${params.month}`)

    obj["data"] = response
    obj["dataset"] = params.indicator_name
    obj["rows"] = response.length

    return obj
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = mapMethods
