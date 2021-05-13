const indicatorsDatabase = require("../database/indicatorsDatabase")

async function indicatorsMethods(params) {
  try {
    let response
    if (!params.start_date && !params.end_date) {
      response = await indicatorsDatabase.getAllData(params.indicator_name)
      console.log(`[${params.indicator_name}] -> getAllData`)
    }
    if (!params.start_date && params.end_date) {
      response = await indicatorsDatabase.getDataUntil(
        params.indicator_name,
        params.end_date
      )
      console.log(
        `[${params.indicator_name}] -> getDataUntil ${params.end_date}`
      )
    }
    if (params.start_date && !params.end_date) {
      response = await indicatorsDatabase.getDataFrom(
        params.indicator_name,
        params.start_date
      )
      console.log(
        `[${params.indicator_name}] -> getDataFrom ${params.start_date}`
      )
    }

    if (params.start_date && params.end_date) {
      response = await indicatorsDatabase.getDataFromUntil(
        params.indicator_name,
        params.start_date,
        params.end_date
      )
      console.log(
        `[${params.indicator_name}] -> getDataFrom ${params.start_date} Until ${params.end_date}`
      )
    }
    return response
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = indicatorsMethods
