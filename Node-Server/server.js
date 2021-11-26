//const axios = require("axios");
const express = require("express")
const cors = require("cors")
const routes = require("./Rest-API/routes/routes")
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Monitor da Saúde Portuguesa",
    version: "1.0.0",
    description: "This is a REST API application made with Express. It retrieves data from Monitor da Saúde.",
  },
}
const options = {
  swaggerDefinition,
  apis: ["./Rest-API/routes/*.js"],
}
const swaggerSpec = swaggerJSDoc(options)

const app = express()
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use("/", routes)

app.listen(3030, () => {
  console.log("server started on port 3030")
})
