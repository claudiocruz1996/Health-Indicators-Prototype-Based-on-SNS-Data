const express = require("express")
//const hypertensionController = require("../controllers/hypertensionController")
//const diabetesController = require("../controllers/diabetesController")
const indicatorsController = require("../controllers/indicatorsController")

const router = express.Router()

//router.get("/hipertensao", hypertensionController)
//router.get("/diabetes", diabetesController)
router.get("/indicator", indicatorsController)

module.exports = router
