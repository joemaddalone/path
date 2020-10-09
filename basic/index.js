import rect from './rect.js';
import square from './square.js';
import triangle from './triangle.js';
import circle from './circle.js';
import ellipse from './ellipse.js';
import segment from './segment.js';
import sector from './sector.js';
import polygon from './polygon.js';
import regPolygon from './regPolygon.js';
import polyline from './polyline.js';
import { svg, g } from '../helpers/svg.js';

const makeBasicShapes = (target) => {
  const shapes = [
    rect,
    square,
    triangle,
    circle,
    ellipse,
    segment,
    sector,
    polygon,
    regPolygon,
    polyline,
  ];

  shapes.forEach((shape) => {
    const span = document.createElement('span');
    const s = svg(shape.w, shape.h);
    shape.paths.forEach((p) => {
      s.appendChild(p.path);
    });
    const title = document.createElement('h3');
    title.className = 'ui-header';
    title.innerText = shape.sig;
    const description = document.createElement('p');
    description.innerText = shape.description;
    const source = document.createElement('a');
    source.href = `https://github.com/joemaddalone/path/blob/master/demo/src/basic/${shape.name}.js`;
    source.setAttribute('rel', 'noopener noreferrer');
    source.setAttribute('target', '_blank');
    source.innerText = 'source';
    span.appendChild(title);
    span.appendChild(description);
    span.appendChild(s);
    span.appendChild(source);
    target.appendChild(span);
  });
};

export default makeBasicShapes;
