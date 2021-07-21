import React from "react";
import ReactDOM from "react-dom";
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush 
} from 'recharts';



const color = ["#8884d8", "#82ca9d", "orange", "pink"]


const initialState = {
  data: [],
} 
export default class MyLineChart extends React.Component {

  constructor(props) {
    super(props);
    const data2 = [
      {
        name: 'jan 2021', aces_matosinhos: 4000, aces_sao_mamede: 2400, aces_lisboa_centro: 2600,
      },
      {
        name: 'fev 2021', aces_sao_mamede: 1233, aces_matosinhos: 1242, aces_lisboa_centro: 6658,
      },
      {
        name: 'mar 2021', aces_matosinhos: 2000, aces_sao_mamede: 3800, aces_lisboa_centro: 2290,
      },
      {
        name: 'abr 2021', aces_matosinhos: 65000, aces_sao_mamede: 3450, aces_lisboa_centro: 15290,
      }
    ];
    initialState.data = data2
    this.state = initialState;
  }

  getLineChart = () => {
    const { data } = this.state
    const keysArr = Object.keys(data[0]).slice(1);
    const lineArr= [];
    keysArr.forEach((item, index)=> {
      lineArr.push(<Line type="monotone" dataKey={item} stroke={color[index]} />)
    })
    return lineArr;
  }

  modifyFormatter = (value, name, props) => {
    const nameJSX = <span><span style={{
      display: "inline-block",
      marginRight: "5px",
      borderRadius: "10px",
      width: "10px",
      height: "10px",
      backgroundColor: props.color
    }}></span>{name} : {value}</span>
    return [nameJSX];
  }

  render() {
    const { data } = this.state
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart

          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip formatter={this.modifyFormatter}/>
          <Legend />
        {this.getLineChart()}
        <Brush dataKey={Object.keys(data[0])[0]}>
          <LineChart>
            {this.getLineChart()}
          </LineChart>
        </Brush>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

