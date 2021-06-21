 import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Paper from '@material-ui/core/Paper';
import randomFloat from 'random-float';

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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
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
      {
        aces:"ACES D",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES F",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES G",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES H",
        valor: randomFloat(0,1)
      },
      {
        aces:"ACES I",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES J",
        valor:randomFloat(0,1)
      },
      {
        aces:"ACES K",
        valor:randomFloat(0,1)
      },
    ] 
  },


];

  

export default class SimpleLineChart extends PureComponent {

  render() {
    return (
      <Paper style={{maxWidth:"100%"}}>
      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart
          width={500}
          height={300}
          data={dataTest}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tempo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name={dataTest[0].test[0].aces} type="monotone" dataKey="test[0].valor" stroke="red"  />
          <Line name={dataTest[0].test[1].aces} type="monotone" dataKey="test[1].valor" stroke="blue"  />
          <Line name={dataTest[0].test[2].aces} type="monotone" dataKey="test[2].valor" stroke="purple"  />
          <Line name={dataTest[0].test[3].aces} type="monotone" dataKey="test[3].valor" stroke="green"  />
          <Line name={dataTest[0].test[4].aces} type="monotone" dataKey="test[4].valor" stroke="yellow"  />
          <Line name={dataTest[0].test[5].aces} type="monotone" dataKey="test[5].valor" stroke="pink"  />
          <Line name={dataTest[0].test[6].aces} type="monotone" dataKey="test[6].valor" stroke="orange"  />
          <Line name={dataTest[0].test[7].aces} type="monotone" dataKey="test[7].valor" stroke="grey"  />
          <Line name={dataTest[0].test[8].aces} type="monotone" dataKey="test[8].valor" stroke="teal"  />
          <Line name={dataTest[0].test[9].aces} type="monotone" dataKey="test[9].valor" stroke="black"  />
        </LineChart>
      </ResponsiveContainer>
      </Paper>
    );
  }
}



/* import React, { PureComponent } from 'react';
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';


const initialData = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/highlight-zomm-line-chart-v77bt';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
    const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom2: 'dataMin+50',
    }));
  }

  render() {
    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <button type="button" className="btn update" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </button>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
            <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
            <Tooltip />
            <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
            <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
} */