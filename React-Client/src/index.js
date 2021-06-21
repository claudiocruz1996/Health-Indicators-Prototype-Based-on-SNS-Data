import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app/App"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./styles/Theme"
import { BrowserRouter } from "react-router-dom"

/* import axios from "axios"

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3030/indicator?indicator_name=hipertensao&aces=ACES%20Almada-Seixal&start_date=2021%2F01%2F01&end_date=2021%2F12%2F01").then((response) => {
      console.log(response.data)
    })
  }
  render() {
    return <h1>Welcome to react!</h1>
  }
} */

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
)
