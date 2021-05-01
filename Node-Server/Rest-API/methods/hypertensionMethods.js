const hypertensionDatabase = require("../database/hypertensionDatabase")

async function hypertensionMethod(parms) {
  try {
    let response
    if (Object.keys(parms).length === 0) {
      response = await hypertensionDatabase.getAllData()
      console.log("1")
    }
    if (!parms.start_date && parms.end_date) {
      response = await hypertensionDatabase.getDataUntil(parms.end_date)
      console.log("2")
    }
    if (parms.start_date && !parms.end_date) {
      response = await hypertensionDatabase.getDataFrom(parms.start_date)
      console.log("3")
    }

    if (parms.start_date && parms.end_date) {
      response = await hypertensionDatabase.getDataFromUntil(
        parms.start_date,
        parms.end_date
      )
      console.log("4")
    }
    return response
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = hypertensionMethod
