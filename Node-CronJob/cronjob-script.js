const axios = require("axios")
const cron = require("node-cron")
const { Pool } = require("pg")
require("log-timestamp")
const mapping = require("../Node-CronJob/maps")
const dto = require("../Node-CronJob/dtos")

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

/* const hipertensao = sql.define({
  name: "hipertensao",
  columns: [
    "contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pressao_arterial_inferior_a_150_90_mmhg_n",
    "regiao",
    "ponto_ou_localizacao_geografica",
    "proporcao_hipertensos_65_a_com_pa_150_90",
    "tempo",
    "aces",
  ],
}) */

/* const diabetes = sql.define({
  name: "diabetes",
  columns: [
    "contagem_de_utentes_inscritos_com_diabetes_com_ultimo_resultado_de_hgba1c_inferior_ou_igual_a_8_0",
    "regiao",
    "tempo",
    "ponto_ou_localizacao_geografica",
    "proporcao_dm_c_ultima_hgba1c_8_0",
    "contagem_de_utentes_inscritos_com_diabetes_com_exame_dos_pes_realizado_no_ultimo_ano",
    "proporcao_dm_com_exame_pes_ultimo_ano",
    "aces",
  ],
}) */

/**
 *
 * @param {*} data
 * @param {*} sqlObj
 * @param {*} dataset
 * @param {*} client
 */
async function executeQuery(data, sqlObj, dataset, client) {
  try {
    /*     data.records.forEach((element) => {
      element.fields.tempo += "-01"
      myObject.push(element.fields)
    }) */

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

    console.log(myNewObject)
    console.log("\n---------------------------------------------\n")
    /* let datasetInsert = sqlObj.insert(myObject).toQuery()
    const dropTable = await client.query(`DELETE FROM ${dataset} WHERE true;`)
    const resDatasetInsert = await client.query(datasetInsert)
    console.log(`Os dados para o indicador ${dataset} foram atualizados`) */
    myNewObject = []
  } catch (err) {
    console.log(err.stack)
  }
}
/**
 *
 * @param {*} dataset
 * @param {*} nhits
 * @param {*} sqlObj
 * @param {*} client
 */
async function axiosCallDataset(dataset, nhits, sqlObj, client) {
  try {
    let resTableRow = await client.query(`SELECT COUNT (*) FROM ${dataset};`)
    nhits = 2

    if (resTableRow.rows[0].count != nhits) {
      const resp = await axios.get(
        `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=${nhits}`
      )

      return await executeQuery(resp.data, sqlObj, dataset, client)
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
 * This function recives 2 arguments and then calls the transparency API to get the number of rows in the dataset.
 * @param {string} dataset dataset name
 * @param {Object} sqlObj db model
 */
async function axiosCallNhits(dataset, sqlObj) {
  const client = await pool.connect()
  try {
    //client.connect();
    const resp = await axios.get(
      `https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&q=&rows=0`
    )
    //console.log(resp);
    return await axiosCallDataset(dataset, resp.data.nhits, sqlObj, client)
  } catch (err) {
    console.log(err)
  } finally {
    client.end()
  }
}

/**
 * Scheduler que corre às 01:00h no primeiro dia de cada mês. 0 1 1 * *
 */
cron.schedule("*/20 * * * * *", async function () {
  try {
    //console.log(hipertensao)

    await axiosCallNhits("hipertensao", dto.hipertensao)
    await axiosCallNhits("diabetes", dto.diabetes)
  } catch (err) {
    console.log(err)
  }
})

//mensal
//axiosCallNhits("hipertensao", hipertensao);

// mensal
//axiosCallNhits('diabetes', diabetes);
