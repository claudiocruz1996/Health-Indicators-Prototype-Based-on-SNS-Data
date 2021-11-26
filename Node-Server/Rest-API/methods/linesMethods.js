const linesDatabase = require("../database/LinesDatabase")
const moment = require("moment")
/**
 *
 * @param {*} params
 */
async function linesMethods(params) {
  try {
    let response
    const obj = { dataset: "dataset", rows: 0, data: [] }
    console.log("2")
    response = await linesDatabase.getAllData(params.indicator_name, params.subIndicator_name)
    console.log(`[${params.indicator_name}] -> getAllData`)

    response.forEach((responseRows) => {
      let tempData = obj.data.filter((x) => x.aces == responseRows.aces)
      if (tempData.length == 0) {
        obj.data.push({
          aces: responseRows.aces,
          x: [responseRows.date],
          y: [responseRows.value],
        })
      } else {
        obj.data.forEach((dataRows) => {
          if (dataRows.aces == responseRows.aces) {
            dataRows.x.push(responseRows.date)
            dataRows.y.push(responseRows.value)
          }
        })
      }
    })

    obj["dataset"] = params.indicator_name
    obj["rows"] = response.length

    return obj
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = linesMethods
