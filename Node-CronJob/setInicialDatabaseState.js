const axios = require("axios")
const cron = require("node-cron")
const { Pool } = require("pg")
require("log-timestamp")
const mapping = require("../Node-CronJob/maps")
const dataModels = require("./dataModels")
const acesList = require("./aceList")
const stringSimilarity = require("string-similarity")

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

let concatToFloatList = [
  "total_utentes_sem_mdf_atribuido_por_opcao0",
  "taxa_de_utilizacao_consultas_medicas_1_ano_todos_os_utentes",
  "total_utentes_com_mdf_atribuido0",
  "total_utentes_sem_mdf_atribuido0",
  "taxa_de_utilizacao_consultas_medicas_1_ano_nos_utentes_sem_mdf",
]

function acesFixing(string) {
  return stringSimilarity.findBestMatch(string, acesList).bestMatch.target
}

/**
 * This function creates a new object from the recived data, then it deletes all rows present on the dataset table, and inserts the new freshly created object data.
 * @param {String} tableName This variable stores the table name
 * @param {JSON Object} data This variable stores a JSON with all data about the dataset called
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 * @param {String} dataset This variable passes the Dataset name
 * @param {Pool} client This variable contains the database pool connection
 * @param {Integer} year This variable stores the year used on the dataset call
 */
async function executeQuery(tableName, data, dataModel, dataset, client, year) {
  try {
    data.records.forEach((element) => {
      let data = {}
      Object.keys(element.fields).forEach((field) => {
        if (field != "id") {
          if (field == "ponto_ou_localizacao_geografica" || field == "localizacao_geografica") {
            data["lat"] = element.fields[field][0]
            data["long"] = element.fields[field][1]
          } else if (field == "tempo" || field == "periodo") {
            data["tempo"] = element.fields[field] + "-01"
          } else if (field == "entidade" || field == "aces") {
            data["aces"] = acesFixing(element.fields[field])
          } else {
            if (concatToFloatList.includes(field)) {
              element.fields[field] = parseFloat(element.fields[field].replace(",", "."))
            }
            data[mapping[tableName][field]] = element.fields[field]
          }
        }
      })
      myNewObject.push(data)
    })

    let datasetInsert = dataModel.insert(myNewObject).toQuery()
    await client.query(datasetInsert)
    console.log(`Status:[Atualizado]  Os dados para o indicador ${dataset} foram atualizados para o ano de ${year}`)

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
 * @param {Object} dataModel This variable loads the Data Model correspond to the dataset called
 */
async function axiosCallDataset(tableName, dataset, dataModel) {
  try {
    const client = await pool.connect()
    let initialYear = new Date(2013, 01, 01)
    let currentYear = new Date().getFullYear()
    let rows = 9999
    const resp = await axios.get(`https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&rows=1`)
    let facet = "tempo"
    if (resp.data.records[0].fields.periodo) {
      facet = "periodo"
    }
    while (initialYear.getFullYear() < currentYear) {
      await client.query(`DELETE FROM ${tableName} WHERE date_part('year', tempo) = ${initialYear.getFullYear()};`)
      const resp = await axios.get(`https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=${dataset}&rows=${rows}&refine.${facet}=${initialYear.getFullYear()}`)
      await executeQuery(tableName, resp.data, dataModel, dataset, client, initialYear.getFullYear())
      initialYear = new Date(initialYear.setFullYear(initialYear.getFullYear() + 1))
    }
    client.release()
  } catch (err) {
    console.log(err.stack)
  }
}

async function executePopulation() {
  try {
    await axiosCallDataset("hipertensao", "hipertensao", dataModels.hipertensao)
    await axiosCallDataset("diabetes", "diabetes", dataModels.diabetes)
    await axiosCallDataset("saude_da_mulher_e_crianca", "saude-da-mulher-e-crianca", dataModels.saude_da_mulher_e_crianca)
    await axiosCallDataset("rastreios_oncologicos", "rastreios-oncologicos", dataModels.rastreios_oncologicos)
    await axiosCallDataset("registo_de_testamentos_vitais", "registo-de-testamentos-vitais", dataModels.registo_de_testamentos_vitais)
    await axiosCallDataset(
      "referenciacoes_soep_emitidas_nos_centros_de_saude",
      "referenciacoes-soep-emitidas-nos-centros-de-saude",
      dataModels.referenciacoes_soep_emitidas_nos_centros_de_saude
    )
    await axiosCallDataset(
      "utentes_inscritos_em_cuidados_de_saude_primarios",
      "utentes-inscritos-em-cuidados-de-saude-primarios",
      dataModels.utentes_inscritos_em_cuidados_de_saude_primarios
    )
    await axiosCallDataset("evolucao_do_numero_de_unidades_funcionais", "evolucao-do-numero-de-unidades-funcionais", dataModels.evolucao_do_numero_de_unidades_funcionais)
    await axiosCallDataset("evolucao_dos_contactos_de_enfermagem_nos_csp", "evolucao-dos-contactos-de-enfermagem-nos-csp", dataModels.evolucao_dos_contactos_de_enfermagem_nos_csp)
    await axiosCallDataset(
      "acesso_de_consultas_medicas_pela_populacao_inscrita",
      "acesso-de-consultas-medicas-pela-populacao-inscrita",
      dataModels.acesso_de_consultas_medicas_pela_populacao_inscrita
    )
    await axiosCallDataset("evolucao_das_consultas_medicas_nos_csp", "evolucao-das-consultas-medicas-nos-csp", dataModels.evolucao_das_consultas_medicas_nos_csp)
    console.log("Status:[Atualizado] Base de dados populada com sucesso")
  } catch (err) {
    console.log(err.stack)
  }
}

executePopulation()
