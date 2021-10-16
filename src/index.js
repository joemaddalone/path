import macros from './macros.js';
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

  static positionByArray = (size, shape, sx, sy) => {
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
Path.macro('rect', macros.rect);
Path.macro('square', macros.square);
Path.macro('roundedSquare', macros.roundedSquare);
Path.macro('roundedRect', macros.roundedRect);
Path.macro('circle', macros.circle);
Path.macro('ellipse', macros.ellipse);
Path.macro('lens', macros.lens);
Path.macro('polyline', macros.polyline);
Path.macro('polygon', macros.polygon);
Path.macro('regPolygon', macros.regPolygon);
Path.macro('polygram', macros.polygram);
Path.macro('radialLines', macros.radialLines);
Path.macro('star', macros.star);
Path.macro('triangle', macros.triangle);
Path.macro('sector', macros.sector);
Path.macro('segment', macros.segment);
Path.macro('cross', macros.cross);
Path.macro('symH', macros.symH);
Path.macro('symI', macros.symI);
Path.macro('symX', macros.symX);
Path.macro('omino', macros.omino);
