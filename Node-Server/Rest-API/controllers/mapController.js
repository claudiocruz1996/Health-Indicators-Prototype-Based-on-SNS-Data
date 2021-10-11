const mapMethods = require("../methods/mapMethods")
//const testModel = require("../models/testModel")
/**
 * This function revices the query parameters and then validates them acording to the model.
 * If everything is valid, this function will call the indicatorsMethods function passing the parameters as arguments and then it will send a responde with code 200 with the JSON result
 * If some query parameter isn't valid, this function will send a responde with code 400 and a specific error message
 * @param {Object} req // (request object) HTTP request argument to the middleware function, called "req" by convention.
 * @param {Object} res // (response object) HTTP response argument to the middleware function, called "res" by convention.
 * @param {Callback} next  //Callback argument to the middleware function, called "next" by convention.
 */
async function mapController(req, res, next) {
  try {
    //await testModel.validateAsync(req.query)
    res.status(200).json(await mapMethods(req.query))
  } catch (err) {
    next(err)
    res.status(400).json({
      sucess: false,
      message: err.message,
    })
  }
}

module.exports = mapController
