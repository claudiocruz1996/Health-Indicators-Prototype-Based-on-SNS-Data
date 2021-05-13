const diabetesModel = require("../models/diabetesModel")
const diabetesMethod = require("../methods/diabetesMethods")

async function diabetesController(req, res, next) {
  try {
    await diabetesModel.validateAsync(req.query)
    res.json(await diabetesMethod(req.query))
  } catch (err) {
    next(err)
    res.json({
      sucess: false,
      message: err.message,
    })
  }
}

module.exports = diabetesController
