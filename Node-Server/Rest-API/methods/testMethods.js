const testDatabase = require("../database/testDatabase")

/**
 *
 * @param {*} params
 */
async function testMethods(params) {
  try {
    let response
    const obj = { dataset: "dataset", rows: 0, data: [] }
    //if (params.aces == "" || !params.aces) params.aces = "ACES%"
    if (!params.start_date && !params.end_date) {
      response = await testDatabase.getAllData(params.indicator_name)
      console.log(`[${params.indicator_name}] -> getAllData`)
    }
    if (!params.start_date && params.end_date) {
      response = await testDatabase.getDataUntil(params.indicator_name, params.end_date)
      console.log(`[${params.indicator_name}] -> getDataUntil ${params.end_date}`)
    }
    if (params.start_date && !params.end_date) {
      response = await testDatabase.getDataFrom(params.indicator_name, params.start_date)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date}`)
    }

    if (params.start_date && params.end_date) {
      response = await testDatabase.getDataFromUntil(params.indicator_name, params.start_date, params.end_date)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date} Until ${params.end_date}`)
    }

    //construção do objeto

    obj["dataset"] = params.indicator_name
    obj["rows"] = response.length
    response.forEach((element) => {
      let tempData = obj.data.filter((x) => x.date == element.date)
      if (tempData.length == 0) {
        obj.data.push({
          date: element.date,
          info: [
            {
              aces: element.aces,
              value: element.value,
            },
          ],
        })
      } else {
        tempData[0].info.push({
          aces: element.aces,
          value: element.value,
        })
      }
    })

    return obj
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = testMethods
