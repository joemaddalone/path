import circle from './macros/circle.js';
import cross from './macros/cross.js';
import ellipse from './macros/ellipse.js';
import lens from './macros/lens.js';
import omino from './macros/omino.js';
import polygon from './macros/polygon.js';
import polygram from './macros/polygram.js';
import polyline from './macros/polyline.js';
import radialLines from './macros/radialLines.js';
import rect from './macros/rect.js';
import regPolygon from './macros/regPolygon.js';
import roundedRect from './macros/roundedRect.js';
import roundedSquare from './macros/roundedSquare.js';
import sector from './macros/sector.js';
import segment from './macros/segment.js';
import square from './macros/square.js';
import star from './macros/star.js';
import symH from './macros/symH.js';
import symI from './macros/symI.js';
import symX from './macros/symX.js';
import triangle from './macros/triangle.js';

/**
 * @class Path
 */
export default class Path {
  constructor() {
    /**
     * array of path data.
     * @name Path#pathData
     * @type {string[]}
     */
    this.pathData = [];

    /**
     * array of path data.
     * @name Path#attributes
     * @type {object[]}
     */
    this.attributes = {};
    return this;
  }

  /**
   * @name angleInRadians
   * @memberof Path
   * @static
   * @param  {number} angle
   */
  static angleInRadians = (angle) => (angle * Math.PI) / 180;

  /**
   * @function polarToCartesian
   * @memberof Path
   * @static
   * @param  {number} centerX
   * @param  {number} centerY
   * @param  {number} radius
   * @param  {number} angleInDegrees
   */
  static polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const radians = Path.angleInRadians(angleInDegrees);

    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians),
    };
  };

  /**
   * @function radialPoints
   * @memberof Path
   * @static
   * @param  {number} radius
   * @param  {number} cx
   * @param  {number} cy
   * @param  {number} numOfPoints
   * @param  {number} offsetAngle
   * @param  {number} [vertexSkip=1]
   */
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

  /**
   * @function positionByArray
   * @memberof Path
   * @static
   * @param  {number} size
   * @param  {number[]} shape
   * @param  {number} sx
   * @param  {number} sy
   */
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

  /**
   * @function macro
   * @memberof Path
   * @static
   * @param  {string} name
   * @param  {function} fn
   */
  static macro = (name, fn) => {
    this.prototype[name] = fn;
  };

  /**
   * @function attr
   * @memberof Path
   * @static
   * @param  {string} key
   * @param  {any} val
   */
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

  /**
   * Move svg cursor to x, y.
   * @name Path#m
   * @function
   * @param  {number} x - x coordinate
   * @param  {number} y - y coordinate
   */
  m = (x, y) => this.moveTo(x, y, true);

  /**
   * Move svg cursor to x, y.
   * @name Path#M
   * @function
   * @param  {number} x - x coordinate
   * @param  {number} y - y coordinate
   */
  M = (x, y) => this.moveTo(x, y);

  /**
   * Move svg cursor to x, y.
   * @name Path#moveTo
   * @function
   * @param  {number} x - x coordinate
   * @param  {number} y - y coordinate
   * @param  {boolean} [relative=false]
   */
  moveTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'm' : 'M'}${x} ${y}`);
    return this;
  };

  /**
   * Draw straight line to x, y.
   * @name Path#l
   * @function
   * @param  {number} x
   * @param  {number} y
   */
  l = (x, y) => this.lineTo(x, y, true);

  /**
   * Draw straight line to x, y.
   * @name Path#L
   * @function
   * @param  {number} x
   * @param  {number} y
   */
  L = (x, y) => this.lineTo(x, y);

  /**
   * Draw straight line to x, y.
   * @name Path#lineTo
   * @function
   * @param  {number} x
   * @param  {number} y
   * @param  {boolean} [relative=false]
   */
  lineTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'l' : 'L'}${x} ${y}`);
    return this;
  };

  /**
   * Draw a horizontal line to x.
   * @name Path#H
   * @function
   * @param  {number} x
   */
  H = (x) => this.horizontalTo(x);

  /**
   * Draw a horizontal line to x.
   * @name Path#h
   * @function
   * @param  {number} x
   */
  h = (x) => this.horizontalTo(x, true);

  /**
   * Draw a horizontal line to x.
   * @name Path#horizontalTo
   * @function
   * @param  {number} x
   * @param  {boolean} [relative=false]
   */
  horizontalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'h' : 'H'}${x}`);
    return this;
  };

  /**
   * Draw a vertical line to y.
   * @name Path#V
   * @function
   * @param  {number} y
   */
  V = (y) => this.verticalTo(y);

  /**
   * Draw a vertical line to y.
   * @name Path#v
   * @function
   * @param  {number} y
   */
  v = (y) => this.verticalTo(y, true);

  /**
   * Draw a vertical line to y.
   * @name Path#verticalTo
   * @function
   * @param  {number} y
   * @param  {boolean} [relative=false]
   */
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
   * Move down to relative point px away
   * @name Path#down
   * @function
   * @param  {number} px
   */
  down = (px) => this.v(px);

  /**
   * Move up to relative point px away
   * @name Path#up
   * @function
   * @param  {number} px
   */
  up = (px) => this.v(px * -1);

  /**
   * Move right to relative point px away
   * @name Path#right
   * @function
   * @param  {number} px
   */
  right = (px) => this.h(px);

  /**
   * Move left to relative point px away
   * @name Path#left
   * @function
   * @param  {number} px
   */
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
   * @name Path#toArray
   * @function
   */
  toArray = () => this.pathData;

  /**
   * Return joined pathData array.
   * @name Path#toString
   * @function
   */
  toString = () => this.pathData.join('');

  /**
   * @name Path#toElement
   * @function
   * @param  {object} [attributes={}]
   */
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
Path.macro('rect', rect);
Path.macro('square', square);
Path.macro('roundedSquare', roundedSquare);
Path.macro('roundedRect', roundedRect);
Path.macro('circle', circle);
Path.macro('ellipse', ellipse);
Path.macro('lens', lens);
Path.macro('polyline', polyline);
Path.macro('polygon', polygon);
Path.macro('regPolygon', regPolygon);
Path.macro('polygram', polygram);
Path.macro('radialLines', radialLines);
Path.macro('star', star);
Path.macro('triangle', triangle);
Path.macro('sector', sector);
Path.macro('segment', segment);
Path.macro('cross', cross);
Path.macro('symH', symH);
Path.macro('symI', symI);
Path.macro('symX', symX);
Path.macro('omino', omino);
