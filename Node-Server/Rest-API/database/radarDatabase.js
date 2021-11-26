const { Pool } = require("pg")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "qwerty",
  dialect: "postgres",
  port: 5432,
})




async function getDataFrom(indicator_name, subIndicator_name, year) {
  let response
  try {
    response = await pool.query(`Select ${subIndicator_name} as value, aces, TO_CHAR(tempo, 'YYYY-MM-DD') as date
      FROM ${indicator_name} 
      WHERE  date_trunc('year',tempo) = to_date('${year}','YYYY')
      ORDER BY tempo ASC, aces ASC`)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getDataFrom
}
