import Path from './index.js';

console.log('LOADED!');

const cycloid = (size, cx, cy, k, centerEdge = true) => {
  const p = new Path();
  var R = parseFloat(1);
  var r = parseFloat(k);
  for (var j = 0; j < 360 * decimalToFraction(k).num; ++j) {
    p.M(
      (calcHypocycloidX(R, r, calcRadian(j)) * size) / 2,
      (calcHypocycloidY(R, r, calcRadian(j)) * size) / 2,
    ).L(
      (calcHypocycloidX(R, r, calcRadian(j + 1)) * size) / 2,
      (calcHypocycloidY(R, r, calcRadian(j + 1)) * size) / 2,
    );
  }
  console.log(p.toString());
  return p.toElement({ fill: 'none', stroke: '#222' });
};

const positionByArray = (size, shape, sx, sy) => {
  const response = [];
  const halfSize = size / 2;
  shape.forEach((r, ri) => {
    r.forEach((c, ci) => {
      if (c) {
        response.push({
          size,
          cx: ci * size + halfSize + sx,
          cy: ri * size + halfSize + sy,
          ri,
          ci,
          value: c,
        });
      }
    });
  });

  return response;
};

const omino = (size, shape, sx, sy, lined = false) => {
  const arrangement = positionByArray(size, shape, sx, sy);
  const p = new Path();
  arrangement.forEach((r, index, arr) => {
    const { cx, cy, ri, ci, size } = r;
    const halfSize = size / 2;
    const hasLeftSib = arr.find((a) => a.ri === ri && a.ci === ci - 1);
    const hasRightSib = arr.find((a) => a.ri === ri && a.ci === ci + 1);
    const hasUpSib = arr.find((a) => a.ri === ri - 1 && a.ci === ci);
    const hasDownSib = arr.find((a) => a.ri === ri + 1 && a.ci === ci);
    const left = cx - halfSize;
    const right = cx + halfSize;
    const top = cy - halfSize;
    const bottom = cy + halfSize;
    if (!hasLeftSib || lined) {
      // draw left line
      p.M(left, top);
      p.v(size);
    }
    if (!hasRightSib) {
      // draw right line
      p.M(right, top);
      p.v(size);
    }
    if (!hasUpSib || lined) {
      // draw top line
      p.M(left, top);
      p.h(size);
    }
    if (!hasDownSib) {
      // draw bottom line
      p.M(left, bottom);
      p.h(size);
    }
  });

  return p.toElement({ fill: 'none', stroke: '#222' });
};

// const oshape = [[1], [1], [1]];

const oshape = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const osize = 35;
const ocx = 0;
const ocy = 0;

const o = omino(osize, oshape, ocx, ocy, true);

document.getElementById('svg').appendChild(o);
