import makeDags from './dag/index.js';
import makeBasicShapes from './basic/index.js';
import customMacros from './macros/customMacro.js';
import { svg, g } from './helpers/svg.js';

makeDags();
makeBasicShapes(document.getElementById('basic-shapes'));
const d4 = customMacros();
const s4 = svg(760, 80);
s4.appendChild(d4);
document.getElementById('custom-macros').appendChild(s4);
