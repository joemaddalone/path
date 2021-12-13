import makeDags from './dag';
import makeBasicShapes from './basic';
import customMacros from './macros/customMacro';
import donut from './complex/donut';
import pie from './complex/pie';
import grid from './complex/grid';
import sparkline from './complex/sparkline';
import { clock } from './canvas/clock';
import { svg, g } from './helpers/svg';

const pieData = [
  {
    color: '#086972',
    percent: 20,
    nested: [
      { color: 'rgba(0,100,25,0.9)', percent: 10 },
      { color: 'rgba(0,100,25,0.8)', percent: 10 },
    ],
  },
  {
    color: '#01a9b4',
    percent: 30,
    nested: [
      { color: 'rgba(0,100,25,0.7)', percent: 10 },
      { color: 'rgba(0,100,25,0.6)', percent: 10 },
      { color: 'rgba(0,100,25,0.5)', percent: 10 },
    ],
  },
  {
    color: '#87dfd6',
    percent: 50,
    nested: [
      { color: 'rgba(0,100,25,0.4)', percent: 25 },
      { color: 'rgba(0,100,25,0.3)', percent: 25 },
    ],
  },
];

makeDags();
makeBasicShapes(document.getElementById('basic-shapes'));
const d4 = customMacros();
const s4 = svg(760, 80);
s4.appendChild(d4);
document.getElementById('custom-macros').appendChild(s4);

// pie
const piePaths = pie({
  size: 150,
  cx: 80,
  cy: 80,
  data: pieData,
});

const s5 = svg(250, 160);
piePaths.forEach((pp) => s5.appendChild(pp));
document.getElementById('pie').appendChild(s5);

// donut
const donutPaths = donut({
  width: 25,
  size: 150,
  cx: 80,
  cy: 80,
  data: pieData,
});

const s6 = svg(250, 160);
donutPaths.forEach((dp) => s6.appendChild(dp));
document.getElementById('donut').appendChild(s6);

// donut + pie
const donutPaths2 = donut({
  width: 20,
  size: 175,
  cx: 90,
  cy: 90,
  data: pieData.map((pd) => pd.nested).flat(),
});

const piePaths2 = pie({
  size: 130,
  cx: 90,
  cy: 90,
  data: pieData,
});

const s7 = svg(180, 180);
donutPaths2.forEach((dp) => s7.appendChild(dp));
piePaths2.forEach((pp) => s7.appendChild(pp));
document.getElementById('combined').appendChild(s7);

// grid
const gridLines = grid({
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  rows: 10,
  cols: 20,
});

const s8 = svg(301, 151);
s8.appendChild(gridLines);
document.getElementById('grid').appendChild(s8);

// grid 2
const gridLines2 = grid({
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  rows: 10,
  cols: 20,
});

const spark = sparkline({
  width: 300,
  height: 150,
  data: [-10, -45, 10, 0, 35, 10, -9, 25, 15, 75],
});

const s9 = svg(301, 151);
s9.appendChild(gridLines2);
s9.appendChild(spark);
document.getElementById('spark').appendChild(s9);

// clock
clock(document.getElementById('canvas'));
