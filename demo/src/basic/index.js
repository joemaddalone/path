import rect from './rect';
import roundedRect from './roundedRect';
import square from './square';
import roundedSquare from './roundedSquare';
import triangle from './triangle';
import circle from './circle';
import ellipse from './ellipse';
import lens from './lens';
import segment from './segment';
import sector from './sector';
import polygon from './polygon';
import regPolygon from './regPolygon';
import polyline from './polyline';
import star from './star';
import polygram from './polygram';
import radialLines from './radialLines';
import symX from './symX';
import symH from './symH';
import symI from './symI';
import cross from './cross';
import { svg, g } from '../helpers/svg';

const makeBasicShapes = (target) => {
  const shapes = [
    rect,
    roundedRect,
    square,
    roundedSquare,
    triangle,
    circle,
    ellipse,
    lens,
    segment,
    sector,
    polygon,
    regPolygon,
    polygram,
    polyline,
    star,
    radialLines,
    cross,
    symX,
    symH,
    symI,
  ];

  shapes.forEach((shape) => {
    const span = document.createElement('span');
    const s = svg(shape.w, shape.h);
    shape.paths.forEach((p) => {
      s.appendChild(p.path);
    });
    const title = document.createElement('h3');
    title.className = 'ui-header';
    title.innerHTML = `<span class="func">${shape.method}</span>(<i class="args">${shape.args}</i>)`;
    // title.innerText = shape.sig;
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
