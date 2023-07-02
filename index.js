import makeDags from './dag/index.js';
import makeBasicShapes from './basic/index.js';
import customMacros from './macros/customMacro.js';
import donut from './complex/donut.js';
import pie from './complex/pie.js';
import grid from './complex/grid.js';
import sparkline from './complex/sparkline.js';
import { clock } from './canvas/clock.js';
import { svg, g } from './helpers/svg.js';

makeDags();
// clock
clock(document.getElementById('canvas'));
