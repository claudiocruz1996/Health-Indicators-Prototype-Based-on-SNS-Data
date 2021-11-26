const { Pool } = require("pg")

const pool = new Pool({
  user: "claudio",
  host: "localhost",
  database: "MDS",
  password: "qwerty",
  dialect: "postgres",
  port: 5432,
})


async function getDataFrom(indicator_name, subIndicator_name, year, month) {
  let response
  try {
    response = await pool.query(`
      SELECT h.aces, avg(h.${subIndicator_name}) as value, h.lat, h.long
      FROM ${indicator_name} h
      WHERE (${year} = 0 OR date_part('year',h.tempo) = ${year})
      AND (${month} = 0 OR date_part('month',h.tempo) = ${month})
      GROUP BY h.aces, h.lat, h.long
      `)
    return response.rows
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getDataFrom,
}
