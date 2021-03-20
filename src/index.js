export default class Path {
  constructor() {
    this.pathData = [];
    this.attributes = {};
    return this;
  }

  static angleInRadians = (angle) => (angle * Math.PI) / 180;

  static polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const radians = Path.angleInRadians(angleInDegrees);

    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians),
    };
  };

  static radialPoints = (
    radius,
    cx,
    cy,
    numOfPoints,
    offsetAngle,
    vertexSkip = 1,
  ) => {
    offsetAngle = offsetAngle || -0.5 * Math.PI;
    radius = radius || 0.0000000001;
    const baseAngle = (2 * Math.PI * vertexSkip) / numOfPoints;
    const vertexIndices = Array.from(
      Array(numOfPoints >= 0 ? numOfPoints : 0).keys(),
    );
    const precision = Math.max(0, 4 - Math.floor(Math.log10(radius)));
    return vertexIndices.map((_, index) => {
      const currentAngle = index * baseAngle + offsetAngle;
      return [
        (cx + radius * Math.cos(currentAngle)).toFixed(precision),
        (cy + radius * Math.sin(currentAngle)).toFixed(precision),
      ];
    });
  };

  static macro = (name, fn) => {
    this.prototype[name] = fn;
  };

  attr = (key, val) => {
    this.attributes[key] = val;
    return this;
  };

  /**
   * Common attr shortcuts
   */
  fill = (val) => this.attr('fill', val);
  stroke = (val) => this.attr('stroke', val);
  strokeWidth = (val) => this.attr('stroke-width', val);
  style = (val) => this.attr('style', val);

  /**
   * Move svg cursor to x, y.
   */
  m = (x, y) => this.moveTo(x, y, true);
  M = (x, y) => this.moveTo(x, y);
  moveTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'm' : 'M'}${x} ${y}`);
    return this;
  };

  /**
   * Draw straight line to x, y.
   */
  l = (x, y) => this.lineTo(x, y, true);
  L = (x, y) => this.lineTo(x, y);
  lineTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'l' : 'L'}${x} ${y}`);
    return this;
  };

  /**
   * Draw a horizontal line to x.
   */
  H = (x) => this.horizontalTo(x);
  h = (x) => this.horizontalTo(x, true);
  horizontalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'h' : 'H'}${x}`);
    return this;
  };

  /**
   * Draw a vertical line to y.
   */
  V = (y) => this.verticalTo(y);
  v = (y) => this.verticalTo(y, true);
  verticalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'v' : 'V'}${x}`);
    return this;
  };

  /**
   * Draw quadratic curve to ex, ey using cx,cy as the control point.
   */
  Q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey);
  q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey, true);
  qCurve = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 'q' : 'Q'}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Smooth quadratic curve to
   */
  T = (ex, ey) => this.tCurveTo(ex, ey);
  t = (ex, ey) => this.tCurveTo(ex, ey, true);
  tCurveTo = (ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 't' : 'T'}${ex} ${ey}`);
    return this;
  };

  /**
   * Draw cubic curve to ex, ey using cx1, cy1 & cx2, cy2 as the control points.
   */
  C = (cx1, cy1, cx2, cy2, ex, ey) => this.cCurve(cx1, cy1, cx2, cy2, ex, ey);
  c = (cx1, cy1, cx2, cy2, ex, ey) =>
    this.cCurve(cx1, cy1, cx2, cy2, ex, ey, true);

  cCurve = (cx1, cy1, cx2, cy2, ex, ey, relative = false) => {
    this.pathData.push(
      `${relative ? 'c' : 'C'}${cx1} ${cy1} ${cx2} ${cy2} ${ex} ${ey}`,
    );
    return this;
  };

  /**
   * Smooth cubic curve to
   */
  S = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey);
  s = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey, true);
  sCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Create arcs.
   */
  A = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey);

  a = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey, true);

  arc = (rx, ry, rotation, arc, sweep, ex, ey, relative = false) => {
    this.pathData.push(
      `${
        relative ? 'a' : 'A'
      }${rx} ${ry} ${rotation} ${arc} ${sweep} ${ex} ${ey}`,
    );
    return this;
  };

  /**
   * Move down, up, right, left
   * to relative point px away
   */
  down = (px) => this.v(px);
  up = (px) => this.v(px * -1);
  right = (px) => this.h(px);
  left = (px) => this.h(px * -1);

  /**
   * Close path.
   */
  close = () => {
    this.pathData.push('z');
    return this;
  };

  /**
   * Return pathData array.
   */
  toArray = () => this.pathData;

  /**
   * Return joined pathData array.
   */
  toString = () => this.pathData.join('');

  toElement = (attributes = {}) => {
    const addAttributes = { ...this.attributes, ...attributes };
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    Object.keys(addAttributes).forEach((key) => {
      el.setAttribute(key, addAttributes[key]);
    });
    el.setAttribute('d', this.toString());
    return el;
  };
}

/** Macros **/

Path.macro('rect', function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy - height / 2)
    .right(width)
    .down(height)
    .left(width)
    .up(height);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('square', function (size, cx, cy, centerEnd = true) {
  return this.rect(size, size, cx, cy, centerEnd);
});

Path.macro('roundedSquare', function (size, radius, cx, cy, centerEnd = true) {
  return this.roundedRect(size, size, radius, cx, cy, centerEnd);
});

Path.macro('roundedRect', function (
  width,
  height,
  radius,
  cx,
  cy,
  centerEnd = true,
) {
  const p = new Path();
  const wr = width - radius;
  const hr = height - radius;
  const rq = radius / 2;
  const top = cy - height / 2;
  const left = cx - width / 2;
  const right = left + width;
  const bottom = top + height;

  this.M(left + rq, top)
    .right(wr)
    .Q(right, top, right, top + rq)
    .down(hr)
    .Q(right, bottom, right - rq, bottom)
    .left(wr)
    .Q(left, bottom, left, bottom - rq)
    .up(hr)
    .Q(left, top, left + rq, top)
    .M(left, top);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('circle', function (size, cx, cy, centerEnd = true) {
  return this.ellipse(size, size, cx, cy, centerEnd);
});

Path.macro('ellipse', function (width, height, cx, cy, centerEnd = true) {
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
});

Path.macro('polyline', function (points, relative = false) {
  const clone = [...points];
  const start = clone.shift();
  const move = relative ? this.m : this.M;
  const line = relative ? this.l : this.L;
  move.apply(null, start);
  clone.forEach((val) => {
    line.apply(null, val);
  });
  return this;
});

Path.macro('polygon', function (points) {
  this.polyline(points).close();
  return this;
});

Path.macro('regPolygon', function (size, sides, cx, cy, centerEnd = true) {
  this.polygon(Path.radialPoints(size / 2, cx, cy, sides));
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('polygram', function (
  size,
  points,
  cx,
  cy,
  vertexSkip = 2,
  centerEnd = true,
) {
  this.polygon(Path.radialPoints(size / 2, cx, cy, points, null, vertexSkip));
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('radialLines', function (
  outerSize,
  innerSize,
  points,
  cx,
  cy,
  centerEnd = true,
) {
  const inner = Path.radialPoints(innerSize / 2, cx, cy, points);
  const outer = Path.radialPoints(outerSize / 2, cx, cy, points);

  inner.forEach((coords, index) => {
    this.M(coords[0], coords[1]).L(outer[index][0], outer[index][1]);
  });
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('star', function (
  outerSize,
  innerSize,
  points,
  cx,
  cy,
  centerEnd = true,
) {
  const innerRadius = innerSize / 2;
  const outerRadius = outerSize / 2;
  const increment = 360 / (points * 2);
  const vertexIndices = Array.from({ length: points * 2 });
  const verts = vertexIndices.map((p, i) => {
    let radius = i % 2 == 0 ? outerRadius : innerRadius;
    let degrees = increment * i - 90;
    const { x, y } = Path.polarToCartesian(cx, cy, radius, degrees, centerEnd);
    return [x, y];
  });
  this.polygon(verts);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('triangle', function (size, cx, cy, centerEnd = true) {
  const sq3 = Math.sqrt(3);
  const a = [cx, cy - (sq3 / 3) * size];
  const b = [cx - size / 2, cy + (sq3 / 6) * size];
  const c = [cx + size / 2, cy + (sq3 / 6) * size];
  this.polygon([a, b, c]);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('sector', function (
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  centerEnd = true,
) {
  const radius = size / 2;
  const start = Path.polarToCartesian(cx, cy, radius, endAngle - 90);
  const end = Path.polarToCartesian(cx, cy, radius, startAngle - 90);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(cx, cy)
    .L(start.x, start.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('segment', function (
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  centerEnd = true,
) {
  const radius = size / 2;
  const start = Path.polarToCartesian(cx, cy, radius, endAngle - 90);
  const end = Path.polarToCartesian(cx, cy, radius, startAngle - 90);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('cross', function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, cy).L(r, cy).M(cx, b).L(cx, t);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('symH', function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(l, b).M(l, cy).L(r, cy).M(r, t).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('symI', function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(r, t).M(cx, t).L(cx, b).M(l, b).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});

Path.macro('symX', function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(r, b).M(l, b).L(r, t);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
});
