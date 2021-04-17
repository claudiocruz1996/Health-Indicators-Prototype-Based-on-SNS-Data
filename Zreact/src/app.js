import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/hipertensao").then((response) => {
      console.log(response.data);
    });
  }
  render() {
    return <h1>Welcome to react!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
