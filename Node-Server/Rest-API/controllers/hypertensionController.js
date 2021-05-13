const hypertensionModel = require("../models/hypertensionModels")
const hypertensionMethod = require("../methods/hypertensionMethods")

async function hypertensionController(req, res, next) {
  try {
    await hypertensionModel.validateAsync(req.query)
    res.json(await hypertensionMethod(req.query))
  } catch (err) {
    next(err)
    res.json({
      sucess: false,
      message: err.message,
    })
  }
}

module.exports = hypertensionController
