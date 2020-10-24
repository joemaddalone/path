const angleInRadians = (angle) => ((angle - 90) * Math.PI) / 180.0;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const radians = angleInRadians(angleInDegrees);

  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians),
  };
};

class Path {
  constructor() {
    this.pathData = [];
    this.attributes = {};
    return this;
  }

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
    this.pathData.push(`${relative ? 'q' : 'Q'}${cx} ${cy}`);
    this.pathData.push(`${ex} ${ey}`);
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
    this.pathData.push(`${relative ? 'c' : 'C'}${cx1} ${cy2}`);
    this.pathData.push(`${cx2} ${cy2}`);
    this.pathData.push(`${ex} ${ey}`);
    return this;
  };

  /**
   * Smooth cubic curve to
   */
  S = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey);
  s = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey, true);
  sCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy}`);
    this.pathData.push(`${ex} ${ey}`);
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
  toString = () => this.pathData.join(' ');

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

Path.macro('rect', function (width, height, cx, cy) {
  this.M(cx - width / 2, cy - height / 2)
    .right(width)
    .down(height)
    .left(width)
    .up(height)
    .M(cx, cy);
  return this;
});

Path.macro('square', function (size, cx, cy) {
  return this.rect(size, size, cx, cy);
});

Path.macro('circle', function (size, cx, cy) {
  return this.ellipse(size, size, cx, cy);
});

Path.macro('ellipse', function (width, height, cx, cy) {
  const rx = width / 2;
  const ry = height / 2;

  this.M(cx + rx, cy)
    .A(rx, ry, 0, 0, 1, cx - rx, cy)
    .A(rx, ry, 0, 0, 1, cx + rx, cy)
    .close()
    .M(cx, cy);
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

Path.macro('regPolygon', function (size, sides, cx, cy) {
  const angle = 360 / sides;
  const vertexIndices = Array.from(Array(sides).keys());
  const offset = angleInRadians(angle);
  const radius = size / 2;
  const points = vertexIndices
    .map((index) => {
      return {
        theta: offset + angleInRadians(angle * index),
        r: radius,
      };
    })
    .map(({ r, theta }) => [
      cx + r * Math.cos(theta),
      cy + r * Math.sin(theta),
    ]);
  return this.polygon(points).M(cx, cy);
});

Path.macro('triangle', function (size, cx, cy) {
  const sq3 = Math.sqrt(3);
  const a = [cx, cy - (sq3 / 3) * size];
  const b = [cx - size / 2, cy + (sq3 / 6) * size];
  const c = [cx + size / 2, cy + (sq3 / 6) * size];
  return this.polygon([a, b, c]).M(cx, cy);
});

Path.macro('sector', function (cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(cx, cy)
    .L(start.x, start.y)
    .M(cx, cy);
  return this;
});

Path.macro('segment', function (cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .M(cx, cy);
  return this;
});

export default Path;
