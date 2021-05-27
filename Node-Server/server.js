//const axios = require("axios");
const express = require("express")
const cors = require("cors")
const routes = require("./Rest-API/routes/routes")
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description: "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  /*  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ], */
}
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./Rest-API/routes/*.js"],
}
const swaggerSpec = swaggerJSDoc(options)

const app = express()
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Allow Cross-Origin requests
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use("/", routes)

/* // Section 3
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/hipertensao", (req, res) => {
  axios.get("https://randomuser.me/api/?page=1&results=10").then((response) => {
    res.send(response.data);
  });
}); */
// Section 4

app.listen(3030, () => {
  console.log("server started on port 3030")
})

//routes -> controller -> no controller valida os parametros com a chamada do models (joi) e mandar para os methods -> db

// routes ->
