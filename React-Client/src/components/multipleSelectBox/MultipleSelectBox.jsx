import React, { PureComponent } from "react"
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from "recharts"
import Paper from '@material-ui/core/Paper';
import randomFloat from "random-float"
import randomColor from "randomcolor"

const dataA =  [
    {
      date: "May 2021",
      info: [
        {
          aces: "ACES Sao Mamede",
          value: 3101.95
        }
      ]
    },
    {
      date: "Apr 2021",
      info: [
        {
          aces: "ACES Sao Mamede",
          value: 2597.34
        }
      ]
    },
    {
      date: "Mar 2021",
      info: [
        {
          aces: "ACES Sao Mamede",
          value: 1997.37
        }
      ]
    },
    {
      date: "Feb 2021",
      info: [
        {
          aces: "ACES Sao Mamede",
          value: 1268.29
        }
      ]
    },
    {
      date: "Jan 2021",
      info: [
        {
          aces: "ACES Sao Mamede",
          value: 686.89
        }
      ]
    }
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

const initialState = {
  data: dataA,
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
            <XAxis allowDataOverflow dataKey="date" domain={[left, right]} type="category"/>
            <YAxis allowDataOverflow domain={[0, 100000]} type="number" yAxisId="1" />
            <Tooltip />
            <Line yAxisId="1" type="monotone" name={dataA[0].info[0].aces} dataKey="info[0].value" stroke={"red"} animationDuration={300} />
 

            {refAreaLeft && refAreaRight ? <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} /> : null}
          </LineChart>
        </ResponsiveContainer>

      </div>
    )
  }
}
