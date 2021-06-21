import React, { PureComponent } from "react"
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from "recharts"
import randomFloat from "random-float"
import randomColor from "randomcolor"

const initialData = [
  { name: 1, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 2, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 3, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 4, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 5, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 6, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
  { name: 7, cost: randomFloat(0, 1), impression: randomFloat(0, 1), x: randomFloat(0, 1) },
]
const dataTest =[ 
  {
    tempo: "Dez 2020",
    test: [
      { 
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ]
  },
  {
    tempo: "Jan 2021",
    test: [
      { 
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ]
  },
  {
    tempo: "Fev 2021",
    test: [
      { 
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ]
  },
  {
    tempo: "Mar 2021",
    test: [
      { 
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ]
  },
  {
    tempo: "Abr 2021",
    test: [
      { 
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      { 
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ]
  },
];


const dataTest2 =[ 
  { 
    tempo: "Dez 2020",
    test: [
      {
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ] 
  },
  { 
    tempo: "Fev 2021",
    test: [
      {
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ] 
  },
  { 
    tempo: "Mar 2021",
    test: [
      {
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ] 
  },
  { 
    tempo: "Mai 2021",
    test: [
      {
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ] 
  },
  { 
    tempo: "Jun 2021",
    test: [
      {
        aces:"ACES A",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES B",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES C",
        valor: randomFloat(0,1)
      },
    ] 
  },


];
/* const getAxisYDomain = (from, to, offset) => {
  debugger
  let indexFrom = dataTest.findIndex(x => x.tempo == from);
  let indexTo = dataTest.findIndex(x => x.tempo == to);
  const refData = dataTest.slice(indexFrom , indexTo )
  let [bottom, top] = [refData[0].test[0].valor, refData[0].test[0].valor]
  refData.forEach((d) => {
    if (d.test[0].valor > top) top = d.test[0].valor
    if (d.test[0].valor < bottom) bottom = d.test[0].valor
  })

  return [bottom | 0, (top | 0) + offset] 


} */

const initialState = {
  data: dataTest,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  animation: true,
}

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/highlight-zomm-line-chart-v77bt"

  constructor(props) {
    super(props);
    this.state = initialState;
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
    // xAxis domain
/*     if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft] */
    // yAxis domain
 /*    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 1)*/
  
    let indexFrom = data.findIndex(x => x.tempo == refAreaLeft);
    let indexTo = data.findIndex(x => x.tempo == refAreaRight);
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

  render() {
    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom } = this.state

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
            <XAxis allowDataOverflow dataKey="tempo" domain={[left, right]} type="category"/>
            {/* <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" /> */}
            <YAxis allowDataOverflow domain={[0, 1]} type="number" yAxisId="1" />
            <Tooltip />
{/*             <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
            <Line yAxisId="1" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} /> */}
            <Line yAxisId="1" type="monotone" name={dataTest[0].test[0].aces} dataKey="test[0].valor" stroke={randomColor()} animationDuration={300} />
{/*             <Line yAxisId="1" type="monotone" name={dataTest[0].test[1].aces} dataKey="test[1].valor" stroke={randomColor()} animationDuration={300} />
            <Line yAxisId="1" type="monotone" name={dataTest[0].test[2].aces} dataKey="test[2].valor" stroke={randomColor()} animationDuration={300} /> */}

            {refAreaLeft && refAreaRight ? <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} /> : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
