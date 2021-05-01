const hypertensionModel = require("../models/hypertensionModels")
const hypertensionMethod = require("../methods/hypertensionMethods")

async function hypertensionController(req, res, next) {
  try {
    await hypertensionModel.validateAsync(req.body)
    res.json(await hypertensionMethod(req.body))
  } catch (err) {
    next(err)
    res.json({
      sucess: false,
      message: err.message,
    })
  }
}

module.exports = hypertensionController

/* 
const hypertensionController = async function (req, res, next) {
  const value = await hypertensionModel.validate(req.body)
  if (value.error) {
    res.json({
      sucess: false,
      message: value.error.details[0].message,
    })
  } else {
   next()
   //aqui chamo o methods mas como?
  }
}

 */

/*   try {
    const value = await hypertensionModel.validate(req.body)
    await hypertensionMethod(req, res)
    //console.log(value)
  } catch (err) {
    return next(err)
    console.log(err.stack)
    //não imprime erro
  } */
