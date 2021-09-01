const testDatabase = require("../database/testDatabase")
const moment = require("moment")
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
      response = await testDatabase.getDataFromUntil(params.indicator_name, params.subIndicator_name, params.start_date, params.end_date)
      console.log(`[${params.indicator_name}] -> getDataFrom ${params.start_date} Until ${params.end_date}`)
    }

    //construção do objeto
    //Opcao 1

    /*   {
  "dataset": "hipertensao",
  "rows": 15,
  "data": [
    {
      "date": "May 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 3053.94
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 3101.95
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 942.8
        }
      ]
    },
    {
      "date": "Apr 2021",
      "info": [
        {
          "aces": "ACES Sao Mamede",
          "value": 2597.34
        },
        {
          "aces": "ACES Matosinhos",
          "value": 2474.95
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 721.64
        }
      ]
    },
    {
      "date": "Mar 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 1880.58
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 1997.37
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 510.04
        }
      ]
    },
    {
      "date": "Feb 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 1098.14
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 261.34
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 1268.29
        }
      ]
    },
    {
      "date": "Jan 2021",
      "info": [
        {
          "aces": "ACES Matosinhos",
          "value": 525.99
        },
        {
          "aces": "ACES Sao Mamede",
          "value": 686.89
        },
        {
          "aces": "ACES Lisboa Central",
          "value": 138.13
        }
      ]
    }
  ]
} */

    /*     obj["dataset"] = params.indicator_name
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
 */
    //Opcao 2
    /*     {
      dataset: 'hipertensao',
      rows: 15,
      data: [
        {
          date: 'May 2021',
          'ACES Matosinhos': 3053.94,
          'ACES Sao Mamede': 3101.95,
          'ACES Lisboa Central': 942.8
        },
        {
          date: 'Apr 2021',
          'ACES Sao Mamede': 2597.34,
          'ACES Matosinhos': 2474.95,
          'ACES Lisboa Central': 721.64
        },
        {
          date: 'Mar 2021',
          'ACES Matosinhos': 1880.58,
          'ACES Sao Mamede': 1997.37,
          'ACES Lisboa Central': 510.04
        },
        {
          date: 'Feb 2021',
          'ACES Matosinhos': 1098.14,
          'ACES Lisboa Central': 261.34,
          'ACES Sao Mamede': 1268.29
        },
        {
          date: 'Jan 2021',
          'ACES Matosinhos': 525.99,
          'ACES Sao Mamede': 686.89,
          'ACES Lisboa Central': 138.13
        }
      ]
    } */

    /*     response.forEach((responseRows) => {
      let tempData = obj.data.filter((x) => x.date == responseRows.date)
      if (tempData.length == 0) {
        obj.data.push({
          ["date"]: responseRows.date,
          [responseRows.aces]: responseRows.value,
        })
      } else {
        obj.data.forEach((dataRows) => {
          if (dataRows.date == responseRows.date) {
            dataRows[responseRows.aces] = responseRows.value
          }
        })
      }
    }) */

    //Opcao 3
    /*{
  "dataset": "hipertensao",
  "rows": 15,
  "data": [
    {
      "aces": "ACES Matosinhos",
      "x": [
        "May 2021",
        "Apr 2021",
        "Mar 2021",
        "Feb 2021",
        "Jan 2021"
      ],
      "y": [
        3053.94,
        2474.95,
        1880.58,
        1098.14,
        525.99
      ]
    },
    {
      "aces": "ACES Sao Mamede",
      "x": [
        "May 2021",
        "Apr 2021",
        "Mar 2021",
        "Feb 2021",
        "Jan 2021"
      ],
      "y": [
        3101.95,
        2597.34,
        1997.37,
        1268.29,
        686.89
      ]
    },
    {
      "aces": "ACES Lisboa Central",
      "x": [
        "May 2021",
        "Apr 2021",
        "Mar 2021",
        "Feb 2021",
        "Jan 2021"
      ],
      "y": [
        942.8,
        721.64,
        510.04,
        261.34,
        138.13
      ]
    }
  ]
}*/
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

module.exports = testMethods
