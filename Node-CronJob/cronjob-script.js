const axios = require("axios")
const cron = require("node-cron")
const { Pool } = require("pg")
require("log-timestamp")
const mapping = require("../Node-CronJob/maps")
const dataModels = require("./dataModels")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "postgres",
  port: 5433,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

let myNewObject = []

/**
 * This function creates a new object from the recived data, then it deletes all rows present on the dataset table, and inserts the new freshly created object data.
 * @param {*} data This variable stores a JSON with all data about the dataset called
 * @param {*} dataModel This variable loads the Data Model correspond to the dataset called
 * @param {*} dataset This variable passes the Dataset name
 * @param {*} client This variable contains the database pool connection
 */
async function executeQuery(data, dataModel, dataset, client) {
  try {
    data.records.forEach((element) => {
      let data = {}
      Object.keys(element.fields).forEach((field) => {
        if (field == "ponto_ou_localizacao_geografica") {
          data["lat"] = element.fields[field][0]
          data["long"] = element.fields[field][1]
        } else if (field == "tempo") {
          data["tempo"] = element.fields[field] + "-01"
        } else {
          data[mapping[dataset][field]] = element.fields[field]
        }
      })
      myNewObject.push(data)
    })

    let datasetInsert = dataModel.insert(myNewObject).toQuery()
    const dropTable = await client.query(`DELETE FROM ${dataset} WHERE true;`)
    const resDatasetInsert = await client.query(datasetInsert)
    console.log(`Os dados para o indicador ${dataset} foram atualizados`)
    myNewObject = []
  } catch (err) {
    console.log(err.stack)
  }
}
/**
 * This function verifies if the dataset table is updated, if is not, it calls the transparency API to get all present data available about the dataset
 * and then calls the function executeQuery().
 * @param {*} dataset This variable passes the Dataset name
 * @param {*} nhits This variable stores the number of rows with data about the dataset called
 * @param {*} dataModel This variable loads the Data Model correspond to the dataset called
 * @param {*} client This variable contains the database pool connection
 */
async function axiosCallDataset(dataset, nhits, dataModel, client) {
  try {
    let resTableRow = await client.query(`SELECT COUNT (*) FROM ${dataset};`)
    if (resTableRow.rows[0].count != nhits) {
      const resp = await axios.get(
        `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=${nhits}`
      )

      return await executeQuery(resp.data, dataModel, dataset, client)
    } else {
      console.log(
        `Os dados para o indicador ${dataset} já se encontram atualizados`
      )
    }
  } catch (err) {
    console.log(err.stack)
  }
}

/**
 * This function calls the transparency API to get the number of rows in the dataset.
 * @param {string} dataset This variable passes the Dataset name
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 */
async function axiosCallNhits(dataset, dataModel) {
  const client = await pool.connect()
  try {
    const resp = await axios.get(
      `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=0`
    )

    return await axiosCallDataset(dataset, resp.data.nhits, dataModel, client)
  } catch (err) {
    console.log(err)
  } finally {
    client.end()
  }
}

/**
 * This Scheduler runs every first day of every month at 01:00h. [0 1 1 * *]
 */
cron.schedule("*/30 * * * * *", async function () {
  try {
    await axiosCallNhits("hipertensao", dataModels.hipertensao)
    await axiosCallNhits("diabetes", dataModels.diabetes)
  } catch (err) {
    console.log(err)
  }
})
