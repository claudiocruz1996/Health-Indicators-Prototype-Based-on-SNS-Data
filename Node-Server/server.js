//const axios = require("axios");
const express = require("express")
const cors = require("cors")
const app = express()
const routes = require("./Rest-API/routes/routes")

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
