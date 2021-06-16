const { Pool } = require("pg")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "postgres",
  dialect: "postgres",
  port: 5433,
})
/**
 *
 * @param {*} indicator_name
 * @param {*} aces
 */
async function getAllData(indicator_name, aces) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM ${indicator_name} 
      WHERE aces = '${aces}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}
async function getDataUntil(indicator_name, end_date, aces) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM ${indicator_name}  
      WHERE tempo <= '${end_date}'
      AND aces = '${aces}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

async function getDataFrom(indicator_name, start_date, aces) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM ${indicator_name}  
      WHERE tempo >= '${start_date}'
      AND aces = '${aces}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

async function getDataFromUntil(indicator_name, start_date, end_date, aces) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM ${indicator_name} 
      WHERE tempo BETWEEN '${start_date}'
      AND '${end_date}'
      AND aces = '${aces}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAllData,
  getDataUntil,
  getDataFrom,
  getDataFromUntil,
}
