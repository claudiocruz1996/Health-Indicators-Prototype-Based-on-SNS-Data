const { Pool } = require("pg")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "postgres",
  dialect: "postgres",
  port: 5433,
})

async function getAllData() {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM diabetes
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}
async function getDataUntil(end_date) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM diabetes 
      WHERE tempo <= '${end_date}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

async function getDataFrom(start_date) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM diabetes 
      WHERE tempo >= '${start_date}'
      ORDER BY tempo DESC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

async function getDataFromUntil(start_date, end_date) {
  let response
  try {
    response = await pool.query(`SELECT * 
      FROM diabetes 
      WHERE tempo >= '${start_date}'
      AND tempo <=  '${end_date}'
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
