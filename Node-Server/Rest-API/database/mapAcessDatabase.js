const { Pool } = require("pg")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "qwerty",
  dialect: "postgres",
  port: 5432,
})


async function getDataFromUntil(indicator_name, subIndicator_name, start_date, end_date) {
  let response
  try {
    response = await pool.query(`Select ${subIndicator_name} as value, aces, TO_CHAR(tempo, 'YYYY-MM-DD') as date, lat, long
      FROM ${indicator_name} 
      WHERE tempo BETWEEN '${start_date}'
      AND '${end_date}'
      ORDER BY tempo ASC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getDataFromUntil,
}
