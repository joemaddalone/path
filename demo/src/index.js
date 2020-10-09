import makeDags from './dag';
import makeBasicShapes from './basic';
import customMacros from './macros/customMacro';
import { svg, g } from './helpers/svg';

makeDags();
makeBasicShapes(document.getElementById('basic-shapes'));
const d4 = customMacros();
const s4 = svg(760, 80);
s4.appendChild(d4);
document.getElementById('custom-macros').appendChild(s4);
