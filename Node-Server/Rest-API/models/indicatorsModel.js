const joi = require("joi").extend(require("@joi/date"))

const indicatorsModel = joi.object().keys({
  indicator_name: joi.string().valid("hipertensao", "diabetes").required(),
  start_date: joi.date().format("DD/MM/YYYY").utc(),
  end_date: joi.date().format("DD/MM/YYYY").utc(),
})

module.exports = indicatorsModel
