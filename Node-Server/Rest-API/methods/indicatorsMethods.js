const indicatorsDatabase = require("../database/indicatorsDatabase")

async function indicatorsMethods(params) {
  try {
    let response
    const obj = { dataset: "dataset", rows: 0, data: [] }
    if (params.aces == "" || !params.aces) params.aces = "ACES%"
    if (!params.start_date && !params.end_date) {
      response = await indicatorsDatabase.getAllData(params.indicator_name, params.aces)
      console.log(`[${params.indicator_name}] -> getAllData`)
    }
    if (!params.start_date && params.end_date) {
      response = await indicatorsDatabase.getDataUntil(params.indicator_name, params.end_date, params.aces)
      console.log(`[${params.indicator_name}] -> getDataUntil ${params.end_date}`)
    }
    if (params.start_date && !params.end_date) {
      response = await indicatorsDatabase.getDataFrom(params.indicator_name, params.start_date, params.aces)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date}`)
    }

    if (params.start_date && params.end_date) {
      response = await indicatorsDatabase.getDataFromUntil(params.indicator_name, params.start_date, params.end_date, params.aces)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date} Until ${params.end_date}`)
    }

    obj["dataset"] = params.indicator_name
    obj["rows"] = response.length
    obj["data"].push(response)

    return obj
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = indicatorsMethods
