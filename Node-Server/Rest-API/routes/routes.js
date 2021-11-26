const express = require("express")
//const hypertensionController = require("../controllers/hypertensionController")
//const diabetesController = require("../controllers/diabetesController")
const lineController = require("../controllers/lineController")
//const testController = require("../controllers/testController")
const mapController = require("../controllers/mapController")
const radarController = require("../controllers/radarController")

const router = express.Router()


/**
 * @swagger
 * /lines:
 *   get:
 *     summary: This REST API request retrieves a list of specific health indicators.
 *     description: Retrieve a list of a health indicator. This will be used to plot statistical line graphs about diferent health areas.
 *     tags:
 *      - Graph
 *     parameters:
 *      - name: indicator_name
 *        in: query
 *        description: Name of the indicator to be searched
 *        required: true
 *        type: string
 *        example: hipertensao
 *      - name: subIndicator_name
 *        in: query
 *        description: Name of the subindicator to be searched
 *        required: true
 *        type: string
 *        example: cntg_hipertensos_pa_menor_150_90_mmhg_n_norm
 *     responses:
 *       200:
 *         description: A list of a certain health subindicator.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataset:
 *                   type: string
 *                   description: Name of the dataset
 *                   example: hipertensao
 *                 rows:
 *                   type: integer
 *                   description: Number of rows returned from the database
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Grande Porto I - Santo Tirso e Trofa
 *                       x:
 *                         type: date
 *                         description: date when the subindicator was collected.
 *                         example: [ "2014-01-01", "2014-02-01", ...]
 *                       y:
 *                         type: float
 *                         description:  Subindicator value.
 *                         example: [1678.29,3026.36,...]
 *       400:
 *         description: A message explaining the reason for the failure.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sucess:
 *                  type: bollean
 *                  description: Sucess of the response.
 *                  example: false
 *                message:
 *                  type: string
 *                  description: The user's name.
 *                  example: "\"end_date\" must be in YYYY/MM/DD format"
 */
router.get("/lines", lineController)
/* 
 * @swagger
 * /test:
 *   get:
 *     summary: This REST API request retrieves a list of some health indicators that can be filtered by aces and time interval.
 *     description: Retrieve a list of a health indicator. This can be used to plot statistical graphs about diferent health areas.
 *     tags:
 *      - Graph
 *     parameters:
 *      - name: indicator_name
 *        in: query
 *        description: Name of the indicator to be searched
 *        required: true
 *        type: string
 *        example: hipertensao
 *      - name: subIndicator_name
 *        in: query
 *        description: Name of the subindicator to be searched
 *        required: true
 *        type: string
 *        example: cntg_hipertensos_pa_menor_150_90_mmhg_n_norm
 *      - name: start_date
 *        in: query
 *        description: Start search from
 *        required: false
 *        type: date
 *        example: 2021/01/01
 *      - name: end_date
 *        in: query
 *        description: Search until
 *        required: false
 *        type: date
 *        example: 2021/12/01
 *       200:
 *         description: A list of a certain health subindicator.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataset:
 *                   type: string
 *                   description: Name of the dataset
 *                   example: hipertensao
 *                 rows:
 *                   type: integer
 *                   description: Number of rows returned from the database
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       aces:
 *                         type: string
 *                         description: ACES name.
 *                         example: ACES Grande Porto I - Santo Tirso e Trofa
 *                       x:
 *                         type: date
 *                         description: date when the subindicator was collected.
 *                         example: [ "2014-01-01", "2014-02-01", ...]
 *                       y:
 *                         type: float
 *                         description:  Subindicator value.
 *                         example: [1678.29,3026.36,...]
 *       400:
 *         description: A message explaining the reason for the failure.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sucess:
 *                  type: bollean
 *                  description: Sucess of the response.
 *                  example: false
 *                message:
 *                  type: string
 *                  description: The user's name.
 *                  example: "\"end_date\" must be in YYYY/MM/DD format"
 *
router.get("/test", testController) */
/**
 * @swagger
 * /radar:
 *   get:
 *     summary: This REST API request retrieves a list of a specific health indicator filtered by year.
 *     description: Retrieve a list of a health indicator by year. This can be used to plot statistical radar graphs about diferent health areas.
 *     tags:
 *      - Graph
 *     parameters:
 *      - name: indicator_name
 *        in: query
 *        description: Name of the indicator to be searched
 *        required: true
 *        type: string
 *        example: hipertensao
 *      - name: subIndicator_name
 *        in: query
 *        description: Name of the subindicator to be searched
 *        required: true
 *        type: string
 *        example: cntg_hipertensos_pa_menor_150_90_mmhg_n_norm
 *      - name: year
 *        in: query
 *        description: Year to search from
 *        required: true
 *        type: date
 *        example: 2019
 *     responses:
 *       200:
 *         description: A list of a certain health subindicator.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataset:
 *                   type: string
 *                   description: Name of the dataset
 *                   example: hipertensao
 *                 rows:
 *                   type: integer
 *                   description: Number of rows returned from the database
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Grande Porto I - Santo Tirso e Trofa
 *                       x:
 *                         type: date
 *                         description: date when the subindicator was collected.
 *                         example: [ "2014-01-01", "2014-02-01", ...]
 *                       y:
 *                         type: float
 *                         description:  Subindicator value.
 *                         example: [1678.29,3026.36,...]
 *       400:
 *         description: A message explaining the reason for the failure.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sucess:
 *                  type: bollean
 *                  description: Sucess of the response.
 *                  example: false
 *                message:
 *                  type: string
 *                  description: The user's name.
 *                  example: "\"end_date\" must be in YYYY/MM/DD format"
 */
router.get("/radar", radarController)

/**
 * @swagger
 * /map:
 *   get:
 *     summary: This REST API request retrieves a list of a certain health indicators that can be filtered by year and month.
 *     description: Retrieve a list of a health indicator filtered by year and month. This can be used to plot informational maps about diferent health areas.
 *     tags:
 *      - Map
 *     parameters:
 *      - name: indicator_name
 *        in: query
 *        description: Name of the indicator to be searched
 *        required: true
 *        type: string
 *        example: hipertensao
 *      - name: subIndicator_name
 *        in: query
 *        description: Name of the subindicator to be searched
 *        required: true
 *        type: string
 *        example: cntg_hipertensos_pa_menor_150_90_mmhg_n_norm
 *      - name: year
 *        in: query
 *        description: Year to search from
 *        required: false
 *        type: date
 *        example: 2020
 *      - name: month
 *        in: query
 *        description: Month to search from
 *        required: false
 *        type: date
 *        example: 10
 *     responses:
 *       200:
 *         description: A list of a certain health indicator.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataset:
 *                   type: string
 *                   description: Name of the dataset
 *                   example: hipertensao
 *                 rows:
 *                   type: integer
 *                   description: Number of rows returned from the database
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       value:
 *                         type: float
 *                         description: value for the subindicator.
 *                         example: 1783.96
 *                       lat:
 *                         type: float
 *                         description: Latitude value from the local where the indicator was collected.
 *                         example: 37.0274264
 *                       long:
 *                         type: float
 *                         description: Longitude value from the local where the indicator was collected.
 *                         example: -7.9395984
 *                       date:
 *                         type: date
 *                         description: date when the indicator was collected.
 *                         example: 2020-10-01
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Algarve I - Algarve Central
 *       400:
 *         description: A message explaining the reason for the failure.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sucess:
 *                  type: bollean
 *                  description: Sucess of the response.
 *                  example: false
 *                message:
 *                  type: string
 *                  description: The user's name.
 *                  example: "\"end_date\" must be in YYYY/MM/DD format"
 */
router.get("/map", mapController)

module.exports = router
