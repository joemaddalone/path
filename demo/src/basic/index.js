import { svg, g } from '../helpers/svg';
import docs from './docs';
import Path from '@joemaddalone/path';

const parseArgs = (args) => {
  return args
    .map((ar) => {
      if (ar instanceof Array) {
        return `[${parseArgs(ar)}]`;
      }
      return ar;
    })
    .join(', ');
};

const makeBasicShapes = (target) => {
  Object.keys(docs).forEach((k) => {
    const shape = docs[k];
    const demo = shape.demo;
    const span = document.createElement('span');
    const s = svg(demo.w, demo.h);
    demo.args.forEach((a) => {
      const p = new Path();
      s.appendChild(p[shape.method].apply(p, [...a]).toElement());
    });
    const title = document.createElement('h3');
    title.className = 'ui-header';
    title.innerHTML = `<span class="func">.${shape.method}</span>(<i class="args">${shape.args}</i>)`;
    const description = document.createElement('p');
    description.innerText = shape.description;
    const source = document.createElement('pre');
    source.className = 'language-js';
    const code = document.createElement('code');
    const builders = [];
    demo.args.forEach((a, i, arr) => {
      const innerArgs = parseArgs(a);
      const n = arr.length > 1 ? `${shape.method}_${i}` : shape.method;
      builders.push(`const ${n} = new Path().${shape.method}(${innerArgs});`);
      builders.push(`svg.appendChild(${n}.toElement());`);
    });
    code.innerHTML = builders.join('\n');
    span.appendChild(title);
    span.appendChild(description);
    span.appendChild(s);
    span.appendChild(source);
    source.appendChild(code);
    target.appendChild(span);
  });
};

export default makeBasicShapes;
