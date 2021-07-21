import React, { PureComponent } from "react"
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from "recharts"
import Paper from '@material-ui/core/Paper';
import randomFloat from "random-float"
import randomColor from "randomcolor"


 const initialState = {
  data: [],
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  animation: true,
} 

export default class Example extends PureComponent {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    // send HTTP request
    // save it to the state
    const jsonData = JSON.parse(JSON.stringify({
      "dataset": "hipertensao",
      "rows": 15,
      "data": [
        {
          "date": "May 2021",
          "info": [
            {
              "aces": "ACES Matosinhos",
              "value": 3053.94
            },
            {
              "aces": "ACES Sao Mamede",
              "value": 3101.95
            },
            {
              "aces": "ACES Lisboa Central",
              "value": 942.8
            }
          ]
        },
        {
          "date": "Abr 2021",
          "info": [
            {
              "aces": "ACES Matosinhos",
              "value": 3961.94
            },
            {
              "aces": "ACES Sao Mamede",
              "value": 3101.95
            },
            {
              "aces": "ACES Lisboa Central",
              "value": 942.8
            }
          ]
        }
      ]
    }.data))
    this.setState(() => ({
      data: jsonData
    }))
}

 


  zoom() {
    debugger;
    let { refAreaLeft, refAreaRight } = this.state
    const { data } = this.state

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
   
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: "",
      }))
      return
    }
 
    let indexFrom = data.findIndex(x => x.date == refAreaLeft);
    let indexTo = data.findIndex(x => x.date == refAreaRight);
    const sliced = data.slice(indexFrom , indexTo+1 ) 

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: sliced,
      left: indexFrom,
      right: indexTo,
      bottom:0,
      top:1,
    }))
  }

  zoomOut() {
    this.setState(() => ({
      data: initialState.data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
    }))
  }

  getLineChart = () => {
    debugger;
    const lineArr= [];
    this.state.data.forEach((item, index)=> {
        item.info.forEach(element => {
          lineArr.push(<Line yAxisId="1" type="monotone" name="" dataKey="200" stroke={"red"} animationDuration={300} />)
        });
    })
    return lineArr;
  }

  render() {
    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom } = this.state
/*     console.log(data)
    let line = <Line yAxisId="1" type="monotone" name="" dataKey="" stroke={"red"} animationDuration={300} />
    if (data.length > 0){
      line = <Line yAxisId="1" type="monotone" name={data[0].info[0].aces} dataKey="info[0].value" stroke={"red"} animationDuration={300} />
    
    } */

    

    return (
      <div className="highlight-bar-charts" style={{ userSelect: "none", width: "100%" }}>    

        <button type="button" className="btn update" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </button>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e ===null ? "" : e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e ===null ? "" : e.activeLabel })}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="date" domain={[left, right]} type="category"/>
            <YAxis allowDataOverflow domain={[0, 4000]} type="number" yAxisId="1" />
            <Tooltip />
            {/* <Line yAxisId="1" type="monotone" name="" dataKey="info[0].value" stroke={"red"} animationDuration={300} /> */}
            {/* {this.getLineChart()} */}
      
            <Line yAxisId="1" type="monotone" name="" dataKey="info[0].value" stroke={"red"} animationDuration={300} />
 

            {refAreaLeft && refAreaRight ? <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} /> : null}
          </LineChart>
        </ResponsiveContainer>

      </div>
    )
  }
}
