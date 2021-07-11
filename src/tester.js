import Path from './index.js';

console.log('LOADED!');

const rounded = (width, height, radius, cx, cy, centerEnd = true) => {
  const p = new Path();
  const wr = width - radius;
  const hr = height - radius;
  const rq = radius / 2;
  const top = cy - height / 2;
  const left = cx - width / 2;
  const right = left + width;
  const bottom = top + height;
  // move to top left.

  const s = new Path();

  return s
    .M(left + rq, top)
    .right(width - radius)
    .Q(right, top, right, top + rq)
    .down(hr)
    .Q(right, bottom, right - rq, bottom)
    .left(wr)
    .Q(left, bottom, left, bottom - rq)
    .up(hr)
    .Q(left, top, left + rq, top)
    .M(left, top)
    .circle(radius, left + rq, top + rq)
    .circle(radius, right - rq, top + rq)
    .circle(radius, right - rq, bottom - rq)
    .circle(radius, left + rq, bottom - rq)
    .toElement({ fill: 'none', stroke: '#222' });
};

const lens = function (width, height, cx, cy, centerEnd = true) {
  const rx = width / 2;
  const ry = height / 2;

  return new Path()
    .M(cx - width / 2, cy)
    .Q(cx, cy - height, cx + width / 2, cy)
    .Q(cx, cy + height, cx - width / 2, cy)
    .toElement({ fill: 'none', stroke: '#222' });
};

const rect = new Path()
  .rect(150, 100, 250, 250)
  .toElement({ fill: 'none', stroke: 'rgba(0,0,0,0.2)' });
document.getElementById('svg').appendChild(rect);

// const shape = rounded(400, 200, 45, 250, 250);
const shape = lens(200, 100, 250, 250);
const c = new Path()
  .circle(100, 250, 250)
  .toElement({ fill: 'none', stroke: '#222' });
const c2 = new Path()
  .circle(35, 250, 250)
  .toElement({ fill: '#222', stroke: '#222' });
document.getElementById('svg').appendChild(shape);
document.getElementById('svg').appendChild(c);
document.getElementById('svg').appendChild(c2);
