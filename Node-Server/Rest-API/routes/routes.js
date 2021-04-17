const express = require("express");
const hypertensionController = require("../controllers/hypertensionController");
const router = express.Router();

router.post("/hipertensao", hypertensionController);

module.exports = router;
