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

    if (params.start_date && params.end_date) {
      response = await mapAcessDatabase.getDataFromUntil(params.indicator_name, params.subIndicator_name, params.start_date, params.end_date)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date} Until ${params.end_date}`)
    }


    console.log(response)

    obj["data"] = response
    obj["dataset"] = params.indicator_name
    obj["rows"] = response.length

    return obj
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = mapMethods
