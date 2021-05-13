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
 * @param {String} tableName This variable stores the table name
 * @param {JSON Object} data This variable stores a JSON with all data about the dataset called
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 * @param {String} dataset This variable passes the Dataset name
 * @param {Pool} client This variable contains the database pool connection
 */
async function executeQuery(tableName, data, dataModel, dataset, client) {
  try {
    const dropTable = await client.query(`DELETE FROM ${tableName} WHERE true;`)
    data.records.forEach((element) => {
      let data = {}
      Object.keys(element.fields).forEach((field) => {
        if (field != "id") {
          if (field == "ponto_ou_localizacao_geografica" || field == "localizacao_geografica") {
            data["lat"] = element.fields[field][0]
            data["long"] = element.fields[field][1]
          } else if (field == "tempo" || field == "periodo") {
            data["tempo"] = element.fields[field] + "-01"
          } else {
            data[mapping[tableName][field]] = element.fields[field]
          }
        }
      })
      myNewObject.push(data)
    })

    //console.log(myNewObject)

    let i = 0
    while (i < myNewObject.length - 1) {
      let dataInsert = myNewObject.slice(i, i + 3000 < myNewObject.length ? i + 3000 : myNewObject.length)
      let dataQuery = dataModel.insert(dataInsert).toQuery()
      await pool.query(dataQuery)
      i += 3000
    }

    /*let i = 0
    let myObjectTemp = []
    myNewObject.forEach((element) => {
      if (i >= 3000) {
        let datasetInsert = dataModel.insert(myObjectTemp).toQuery()
        const resDatasetInsert = pool.query(datasetInsert)
        myObjectTemp = []
        i = 0
      }
      myObjectTemp.push(element)
      i++
    })

    if (myObjectTemp.length > 0) {
      let datasetInsert = dataModel.insert(myObjectTemp).toQuery()
      const resDatasetInsert = await pool.query(datasetInsert)
    }

 
    //let datasetInsert = dataModel.insert(myNewObject).toQuery()
    //const resDatasetInsert = await client.query(datasetInsert)*/
    console.log(`Status:[Atualizado]  Os dados para o indicador ${dataset} foram atualizados`)
    myNewObject = []
  } catch (err) {
    console.log(err.stack)
  }
}
/**
 * This function verifies if the dataset table is updated, if is not, it calls the transparency API to get all present data available about the dataset
 * and then calls the function executeQuery().
 * @param {String} tableName This variable stores the table name
 * @param {String} dataset This variable passes the Dataset name
 * @param {Integer} nhits This variable stores the number of rows with data about the dataset called
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 * @param {Pool} client This variable contains the database pool connection
 */
async function axiosCallDataset(tableName, dataset, nhits, dataModel, client) {
  try {
    let resTableRow = await client.query(`SELECT COUNT (*) FROM ${tableName};`)
    if (resTableRow.rows[0].count != nhits) {
      const resp = await axios.get(
        `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=${nhits}`
      )
      return await executeQuery(tableName, resp.data, dataModel, dataset, client)
    } else {
      console.log(`Status:[Normal]  Os dados para o indicador ${dataset} já se encontram atualizados`)
    }
  } catch (err) {
    console.log(err.stack)
  }
}

/**
 * This function calls the transparency API to get the number of rows in the dataset.
 * @param {String} tableName This variable stores the table name
 * @param {String} dataset This variable passes the Dataset name
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 */
async function axiosCallNhits(tableName, dataset, dataModel) {
  const client = await pool.connect()
  try {
    const resp = await axios.get(
      `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=0`
    )

    return await axiosCallDataset(tableName, dataset, resp.data.nhits, dataModel, client)
  } catch (err) {
    console.log(err)
  } finally {
    client.end()
  }
}

/**
 * This Scheduler runs every first day of every month at 01:00h. [0 1 1 * *]
 */
cron.schedule("*/10 * * * * *", async function () {
  try {
    /*  await axiosCallNhits("hipertensao", "hipertensao", dataModels.hipertensao)
    await axiosCallNhits("diabetes", "diabetes", dataModels.diabetes)
    await axiosCallNhits("saude_da_mulher_e_crianca", "saude-da-mulher-e-crianca", dataModels.saude_da_mulher_e_crianca)
    await axiosCallNhits("rastreios_oncologicos", "rastreios-oncologicos", dataModels.rastreios_oncologicos)
    await axiosCallNhits(
      "registo_de_testamentos_vitais",
      "registo-de-testamentos-vitais",
      dataModels.registo_de_testamentos_vitais
    ) */
    await axiosCallNhits(
      "referenciacoes_soep_emitidas_nos_centros_de_saude",
      "referenciacoes-soep-emitidas-nos-centros-de-saude",
      dataModels.referenciacoes_soep_emitidas_nos_centros_de_saude
    )
  } catch (err) {
    console.log(err)
  }
})
