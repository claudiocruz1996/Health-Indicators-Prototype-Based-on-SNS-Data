const joi = require("joi").extend(require("@joi/date"))

const diabetesModel = joi.object().keys({
  start_date: joi.date().format("DD/MM/YYYY").utc(),
  end_date: joi.date().format("DD/MM/YYYY").utc(),
})

module.exports = diabetesModel
