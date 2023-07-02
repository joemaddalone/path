import makeDags from './dag';
import makeBasicShapes from './basic';
import customMacros from './macros/customMacro';
import donut from './complex/donut';
import pie from './complex/pie';
import grid from './complex/grid';
import sparkline from './complex/sparkline';
import { clock } from './canvas/clock';
import { svg, g } from './helpers/svg';

makeDags();
// clock
clock(document.getElementById('canvas'));
