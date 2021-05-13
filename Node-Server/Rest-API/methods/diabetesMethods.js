const diabetesDatabase = require("../database/diabetesDatabase")

async function diabetesMethod(parms) {
  try {
    let response
    if (Object.keys(parms).length === 0) {
      response = await diabetesDatabase.getAllData()
      console.log("getAllData")
    }
    if (!parms.start_date && parms.end_date) {
      response = await diabetesDatabase.getDataUntil(parms.end_date)
      console.log("getDataUntil")
    }
    if (parms.start_date && !parms.end_date) {
      response = await diabetesDatabase.getDataFrom(parms.start_date)
      console.log("getDataFrom")
    }

    if (parms.start_date && parms.end_date) {
      response = await diabetesDatabase.getDataFromUntil(
        parms.start_date,
        parms.end_date
      )
      console.log("getDataFromUntil")
    }
    return response
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = diabetesMethod
