/** Macros **/

const rect = function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy - height / 2)
    .right(width)
    .down(height)
    .left(width)
    .up(height);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const square = function (size, cx, cy, centerEnd = true) {
  return this.rect(size, size, cx, cy, centerEnd);
};

const roundedSquare = function (size, radius, cx, cy, centerEnd = true) {
  return this.roundedRect(size, size, radius, cx, cy, centerEnd);
};

const roundedRect = function (width, height, radius, cx, cy, centerEnd = true) {
  const top = cy - height / 2;
  const left = cx - width / 2;
  const right = left + width;
  const bottom = top + height;
  let rx = Math.min(radius, width / 2);
  rx = rx < 0 ? 0 : rx;
  let ry = Math.min(radius, height / 2);
  ry = ry < 0 ? 0 : ry;
  const wr = Math.max(width - rx * 2, 0);
  const hr = Math.max(height - ry * 2, 0);

  this.M(left + rx, top)
    .right(wr)
    .A(rx, ry, 0, 0, 1, right, top + ry)
    .down(hr)
    .A(rx, ry, 0, 0, 1, right - rx, bottom)
    .left(wr)
    .A(rx, ry, 0, 0, 1, left, bottom - ry)
    .up(hr)
    .A(rx, ry, 0, 0, 1, left + rx, top)
    .M(left, top);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const circle = function (size, cx, cy, centerEnd = true) {
  return this.ellipse(size, size, cx, cy, centerEnd);
};

const ellipse = function (width, height, cx, cy, centerEnd = true) {
  const rx = width / 2;
  const ry = height / 2;

  this.M(cx + rx, cy)
    .A(rx, ry, 0, 0, 1, cx - rx, cy)
    .A(rx, ry, 0, 0, 1, cx + rx, cy)
    .close();
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const lens = function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy)
    .Q(cx, cy - height, cx + width / 2, cy)
    .Q(cx, cy + height, cx - width / 2, cy);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const polyline = function (points, relative = false) {
  const clone = [...points];
  const start = clone.shift();
  const move = relative ? this.m : this.M;
  const line = relative ? this.l : this.L;
  move.apply(null, start);
  clone.forEach((val) => {
    line.apply(null, val);
  });
  return this;
};

const polygon = function (points) {
  this.polyline(points).close();
  return this;
};

const regPolygon = function (size, sides, cx, cy, centerEnd = true) {
  this.polygon(this.constructor.radialPoints(size / 2, cx, cy, sides));
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const polygram = function (
  size,
  points,
  cx,
  cy,
  vertexSkip = 2,
  centerEnd = true,
) {
  this.polygon(
    this.constructor.radialPoints(size / 2, cx, cy, points, null, vertexSkip),
  );
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const radialLines = function (
  outerSize,
  innerSize,
  points,
  cx,
  cy,
  centerEnd = true,
) {
  const inner = this.constructor.radialPoints(innerSize / 2, cx, cy, points);
  const outer = this.constructor.radialPoints(outerSize / 2, cx, cy, points);

  inner.forEach((coords, index) => {
    this.M(coords[0], coords[1]).L(outer[index][0], outer[index][1]);
  });
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const star = function (outerSize, innerSize, points, cx, cy, centerEnd = true) {
  const innerRadius = innerSize / 2;
  const outerRadius = outerSize / 2;
  const increment = 360 / (points * 2);
  const vertexIndices = Array.from({ length: points * 2 });
  const verts = vertexIndices.map((p, i) => {
    let radius = i % 2 == 0 ? outerRadius : innerRadius;
    let degrees = increment * i - 90;
    const { x, y } = this.constructor.polarToCartesian(
      cx,
      cy,
      radius,
      degrees,
      centerEnd,
    );
    return [x, y];
  });
  this.polygon(verts);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const triangle = function (size, cx, cy, centerEnd = true) {
  const sq3 = Math.sqrt(3);
  const a = [cx, cy - (sq3 / 3) * size];
  const b = [cx - size / 2, cy + (sq3 / 6) * size];
  const c = [cx + size / 2, cy + (sq3 / 6) * size];
  this.polygon([a, b, c]);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const sector = function (cx, cy, size, startAngle, endAngle, centerEnd = true) {
  const radius = size / 2;
  const start = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    endAngle - 90,
  );
  const end = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    startAngle - 90,
  );
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(cx, cy)
    .L(start.x, start.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const segment = function (
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  centerEnd = true,
) {
  const radius = size / 2;
  const start = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    endAngle - 90,
  );
  const end = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    startAngle - 90,
  );
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const cross = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, cy).L(r, cy).M(cx, b).L(cx, t);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const symH = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(l, b).M(l, cy).L(r, cy).M(r, t).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const symI = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(r, t).M(cx, t).L(cx, b).M(l, b).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const symX = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(r, b).M(l, b).L(r, t);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

const omino = function (size, shape, sx, sy, lined = false) {
  const arrangement = this.constructor.positionByArray(size, shape, sx, sy);
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
      this.M(left, top);
      this.v(size);
    }
    if (!hasRightSib) {
      // draw right line
      this.M(right, top);
      this.v(size);
    }
    if (!hasUpSib || lined) {
      // draw top line
      this.M(left, top);
      this.h(size);
    }
    if (!hasDownSib) {
      // draw bottom line
      this.M(left, bottom);
      this.h(size);
    }
  });
  return this;
};

export default {
  rect,
  square,
  circle,
  roundedRect,
  roundedSquare,
  star,
  polygon,
  polygram,
  polyline,
  regPolygon,
  triangle,
  ellipse,
  omino,
  symH,
  symI,
  symX,
  cross,
  segment,
  sector,
  radialLines,
  lens,
};
