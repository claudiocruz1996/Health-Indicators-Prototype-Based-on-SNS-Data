const indicatorsModel = require("../models/indicatorsModel")
const indicatorsMethods = require("../methods/indicatorsMethods")

async function indicatorsController(req, res, next) {
  try {
    await indicatorsModel.validateAsync(req.query)
    res.json(await indicatorsMethods(req.query))
  } catch (err) {
    next(err)
    res.json({
      sucess: false,
      message: err.message,
    })
  }
}

module.exports = indicatorsController
