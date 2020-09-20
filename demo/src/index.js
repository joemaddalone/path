import dagSinglePath from './dag/dagSinglePath';
import dagTwoPaths from './dag/dagTwoPaths';
import dagNodes from './dag/dagNodes';
import customMacros from './macros/customMacro';
import { svg, g } from './helpers/svg';

const d1 = dagSinglePath();
const s1 = svg(d1.w, d1.h);
s1.appendChild(d1.el);
document.getElementById('one-path').appendChild(s1);

const d2 = dagTwoPaths();
const s2 = svg(d2.w, d2.h);
s2.appendChild(d2.nodes);
s2.appendChild(d2.connectors);
document.getElementById('two-paths').appendChild(s2);

const d3 = dagNodes();
const s3 = svg(d3.w, d3.h);
const g1 = g();
d3.nodes.forEach((node) => g1.appendChild(node));
s3.appendChild(d3.connectors);
s3.appendChild(g1);
document.getElementById('dag-nodes').appendChild(s3);

const d4 = customMacros();
const s4 = svg(760, 80);
s4.appendChild(d4);
document.getElementById('custom-macros').appendChild(s4);
