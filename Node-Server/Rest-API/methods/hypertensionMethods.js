const axios = require("axios")

async function hypertensionMethod(req, res) {
  try {
    const a = {
      test: "abc",
    }
    /*     await axios
      .get("https://randomuser.me/api/?page=1&results=10")
      .then((response) => {
        res.send(response.data)
      }) */
    //return a
    res.json(a)
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = hypertensionMethod
