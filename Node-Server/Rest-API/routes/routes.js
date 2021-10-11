const express = require("express")
//const hypertensionController = require("../controllers/hypertensionController")
//const diabetesController = require("../controllers/diabetesController")
const indicatorsController = require("../controllers/indicatorsController")
const testController = require("../controllers/testController")
const mapController = require("../controllers/mapController")

const router = express.Router()

/**
 * @swagger
 * /indicator:
 *   get:
 *     summary: This REST API request retrieves a list of some health indicators that can be filtered by aces and time interval.
 *     description: Retrieve a list of a health indicator. This can be used to plot statistical graphs about diferent health areas.
 *     parameters:
 *      - name: indicator_name
 *        in: query
 *        description: Name of the indicator to be searched
 *        required: true
 *        type: string
 *        example: hipertensao
 *      - name: aces
 *        in: query
 *        description: name of the ACES (Grouping of Health Centers)
 *        required: true
 *        type: string
 *        example: ACES Almada-Seixal
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
 *                       id:
 *                         type: integer
 *                         description: The indicador ID.
 *                         example: 0
 *                       utentes_hipertensao_pa_menor_150_90_mmhg_n:
 *                         type: integer
 *                         description: Number of users with hypertension and arterial pressure less than 150_90_mmhg_n.
 *                         example: 2517
 *                       regiao:
 *                         type: string
 *                         description: Local where the indicator was collected.
 *                         example: Região de Saúde LVT
 *                       lat:
 *                         type: float
 *                         description: Latitude value from the local where the indicator was collected.
 *                         example: 38.6678522
 *                       long:
 *                         type: float
 *                         description: Longitude value from the local where the indicator was collected.
 *                         example: -9.1875777
 *                       hipertensos_65_anos_pa_150_90:
 *                         type: float
 *                         description: Number of hypertension users with age less than 65 years and arterial pressure less than 150_90_mmhg_n.
 *                         example: 4.97797
 *                       tempo:
 *                         type: date
 *                         description: date when the indicator was collected.
 *                         example: 2021-01-01T00:00:00.000Z
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Almada-Seixal
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
router.get("/indicator", indicatorsController)
/**
 * @swagger
 * /test:
 *   get:
 *     summary: This REST API request retrieves a list of some health indicators that can be filtered by aces and time interval.
 *     description: Retrieve a list of a health indicator. This can be used to plot statistical graphs about diferent health areas.
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
 *                       id:
 *                         type: integer
 *                         description: The indicador ID.
 *                         example: 0
 *                       utentes_hipertensao_pa_menor_150_90_mmhg_n:
 *                         type: integer
 *                         description: Number of users with hypertension and arterial pressure less than 150_90_mmhg_n.
 *                         example: 2517
 *                       regiao:
 *                         type: string
 *                         description: Local where the indicator was collected.
 *                         example: Região de Saúde LVT
 *                       lat:
 *                         type: float
 *                         description: Latitude value from the local where the indicator was collected.
 *                         example: 38.6678522
 *                       long:
 *                         type: float
 *                         description: Longitude value from the local where the indicator was collected.
 *                         example: -9.1875777
 *                       hipertensos_65_anos_pa_150_90:
 *                         type: float
 *                         description: Number of hypertension users with age less than 65 years and arterial pressure less than 150_90_mmhg_n.
 *                         example: 4.97797
 *                       tempo:
 *                         type: date
 *                         description: date when the indicator was collected.
 *                         example: 2021-01-01T00:00:00.000Z
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Almada-Seixal
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
router.get("/test", testController)
/**
 * @swagger
 * /getMapInfo:
 *   get:
 *     summary: This REST API request retrieves a list of some health indicators that can be filtered by aces and time interval.
 *     description: Retrieve a list of a health indicator. This can be used to plot statistical graphs about diferent health areas.
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
 *        example: 2021/01/01
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
 *                       id:
 *                         type: integer
 *                         description: The indicador ID.
 *                         example: 0
 *                       utentes_hipertensao_pa_menor_150_90_mmhg_n:
 *                         type: integer
 *                         description: Number of users with hypertension and arterial pressure less than 150_90_mmhg_n.
 *                         example: 2517
 *                       regiao:
 *                         type: string
 *                         description: Local where the indicator was collected.
 *                         example: Região de Saúde LVT
 *                       lat:
 *                         type: float
 *                         description: Latitude value from the local where the indicator was collected.
 *                         example: 38.6678522
 *                       long:
 *                         type: float
 *                         description: Longitude value from the local where the indicator was collected.
 *                         example: -9.1875777
 *                       hipertensos_65_anos_pa_150_90:
 *                         type: float
 *                         description: Number of hypertension users with age less than 65 years and arterial pressure less than 150_90_mmhg_n.
 *                         example: 4.97797
 *                       tempo:
 *                         type: date
 *                         description: date when the indicator was collected.
 *                         example: 2021-01-01T00:00:00.000Z
 *                       aces:
 *                         type: string
 *                         description: ACES (Grouping of Health Centers) where the indicator was collected.
 *                         example: ACES Almada-Seixal
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
router.get("/getMapInfo", mapController)

module.exports = router
