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
     * @default []
     */
    this.pathData = [];

    /**
     * path attributes.
     * @name Path#attributes
     * @type {object[]}
     * @default []
     */
    this.attributes = {};
    return this;
  }

  /**
   * @function angleInRadians
   * @memberof Path
   * @static
   * @param {number} angle - angle in degrees
   * @returns {number} angle in radians
   */
  static angleInRadians = (angle) => (angle * Math.PI) / 180;

  /**
   * @function polarToCartesian
   * @memberof Path
   * @static
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
   * @param {number} radius - radius
   * @param {number} angle - degree
   * @returns {object} cartesian coordinates
   */
  static polarToCartesian = (cx, cy, radius, angle) => {
    const radians = Path.angleInRadians(angle);
    return {
      x: cx + radius * Math.cos(radians),
      y: cy + radius * Math.sin(radians),
    };
  };

  /**
   * @function clockwisePoint
   * @memberof Path
   * @static
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
   * @param {number} radius - radius
   * @param {number} angle - degree
   * @returns {object} cartesian coordinates
   */
  static clockwisePoint = (cx, cy, radius, angle) => {
    const a = angle - 90;
    return this.polarToCartesian(cx, cy, radius, a);
  };

  /**
   * @function radialPoints
   * @memberof Path
   * @static
   * @param {number} radius - radius
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
   * @param {number} numOfPoints - number of points
   * @param {number} offsetAngle - offset angle
   * @param {number} [vertexSkip=1] - vertex skip
   * @returns {object[]} array of points
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
   * @param {number} size - size of each element
   * @param {any[]} shape - shape
   * @param {number} sx - start x coordinate
   * @param {number} sy - start y coordinate
   * @returns {object[]} array of points
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
   * @param {string} name - name of the macro
   * @param {function} fn - function to be executed
   * @returns {function} macro function
   */
  static macro = (name, fn) => {
    this.prototype[name] = fn;
  };

  /**
   * @function attr
   * @memberof Path
   * @static
   * @param {string} key - key of the attribute
   * @param {any} val - value of the attribute
   */
  attr = (key, val) => {
    this.attributes[key] = val;
    return this;
  };

  /**
   * fill attribute shortcut
   * @name Path#fill
   * @function
   * @param {string|number} val - value for fill attribute
   * @returns {Path} this
   */
  fill = (val) => this.attr('fill', val);

  /**
   * stroke attribute shortcut
   * @name Path#stroke
   * @function
   * @param {string} val - value for stroke attribute
   * @returns {Path} this
   */
  stroke = (val) => this.attr('stroke', val);

  /**
   * stroke-width attribute shortcut
   * @name Path#strokeWidth
   * @function
   * @param {string|number} val - value for stroke-width attribute
   * @returns {Path} this
   */
  strokeWidth = (val) => this.attr('stroke-width', val);

  /**
   * style attribute shortcut
   * @name Path#style
   * @function
   * @param {string} val - value for style attribute
   * @returns {Path} this
   */
  style = (val) => this.attr('style', val);

  /**
   * Move svg cursor to x, y relative to current position.
   * @name Path#m
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  m = (x, y) => this.moveTo(x, y, true);

  /**
   * Move svg cursor to x, y absolute position.
   * @name Path#M
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  M = (x, y) => this.moveTo(x, y);

  /**
   * Move svg cursor to x, y. If relative is true, x, y is relative to current position.
   * @name Path#moveTo
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  moveTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'm' : 'M'}${x} ${y}`);
    return this;
  };

  /**
   * Draw straight line to x, y relative to current position.
   * @name Path#l
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  l = (x, y) => this.lineTo(x, y, true);

  /**
   * Draw straight line to x, y absolute position.
   * @name Path#L
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  L = (x, y) => this.lineTo(x, y);

  /**
   * Draw straight line to x, y. If relative is true, x, y is relative to current position.
   * @name Path#lineTo
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {boolean} [relative=false]
   * @return {Path}
   */
  lineTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'l' : 'L'}${x} ${y}`);
    return this;
  };

  /**
   * Draw a horizontal line to x absolute position.
   * @name Path#H
   * @function
   * @param {number} x - x coordinate
   * @return {Path}
   */
  H = (x) => this.horizontalTo(x);

  /**
   * Draw a horizontal line to x relative to current position.
   * @name Path#h
   * @function
   * @param {number} x - x coordinate
   * @return {Path}
   */
  h = (x) => this.horizontalTo(x, true);

  /**
   * Draw a horizontal line to x. If relative is true, x is relative to current position.
   * @name Path#horizontalTo
   * @function
   * @param {number} x - x coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  horizontalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'h' : 'H'}${x}`);
    return this;
  };

  /**
   * Draw a vertical line to y absolute position.
   * @name Path#V
   * @function
   * @param {number} y - y coordinate
   * @return {Path}
   */
  V = (y) => this.verticalTo(y);

  /**
   * Draw a vertical line to y relative to current position.
   * @name Path#v
   * @function
   * @param {number} y - y coordinate
   * @return {Path}
   */
  v = (y) => this.verticalTo(y, true);

  /**
   * Draw a vertical line to y. If relative is true, y is relative to current position.
   * @name Path#verticalTo
   * @function
   * @param {number} y - y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  verticalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'v' : 'V'}${x}`);
    return this;
  };

  /**
   * Draw quadratic curve to absolute ex, ey using absolute cx,cy as the control point.
   * @name Path#Q
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  Q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey);

  /**
   * Draw quadratic curve to relative ex, ey using relative cx,cy as the control point.
   * @name Path#q
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey, true);

  /**
   * Draw quadratic curve to ex, ey using cx,cy as the control point. If relative is true, points are relative to current position.
   * @name Path#qCurve
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  qCurve = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 'q' : 'Q'}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Smooth quadratic curve to x, y absolute position.
   * @name Path#T
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  T = (ex, ey) => this.tCurveTo(ex, ey);

  /**
   * Smooth quadratic curve to x, y relative to current position.
   * @name Path#t
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @return {Path}
   */
  t = (ex, ey) => this.tCurveTo(ex, ey, true);

  /**
   * Smooth quadratic curve to x, y. If relative is true, x, y is relative to current position.
   * @name Path#tCurveTo
   * @function
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  tCurveTo = (ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 't' : 'T'}${ex} ${ey}`);
    return this;
  };

  /**
   * Draw cubic curve to absolute ex, ey using absolute cx1, cy1 & cx2, cy2 as the control points.
   * @name Path#C
   * @function
   * @param {number} cx1 - first control point x coordinate
   * @param {number} cy1 - first control point y coordinate
   * @param {number} cx2 - second control point x coordinate
   * @param {number} cy2 - second control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  C = (cx1, cy1, cx2, cy2, ex, ey) => this.cCurve(cx1, cy1, cx2, cy2, ex, ey);

  /**
   * Draw cubic curve to relative ex, ey using relative cx1, cy1 & cx2, cy2 as the control points.
   * @name Path#c
   * @function
   * @param {number} cx1 - first control point x coordinate
   * @param {number} cy1 - first control point y coordinate
   * @param {number} cx2 - second control point x coordinate
   * @param {number} cy2 - second control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  c = (cx1, cy1, cx2, cy2, ex, ey) =>
    this.cCurve(cx1, cy1, cx2, cy2, ex, ey, true);

  /**
   * Draw cubic curve to ex, ey using cx1, cy1 & cx2, cy2 as the control points. If relative is true, points are relative to current position.
   * @name Path#cCurve
   * @function
   * @param {number} cx1 - first control point x coordinate
   * @param {number} cy1 - first control point y coordinate
   * @param {number} cx2 - second control point x coordinate
   * @param {number} cy2 - second control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  cCurve = (cx1, cy1, cx2, cy2, ex, ey, relative = false) => {
    this.pathData.push(
      `${relative ? 'c' : 'C'}${cx1} ${cy1} ${cx2} ${cy2} ${ex} ${ey}`,
    );
    return this;
  };

  /**
   * Smooth cubic curve to absolute x, y using absolute cx, cy as the control point.
   * @name Path#S
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  S = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey);

  /**
   * Smooth cubic curve to relative x, y using relative cx, cy as the control point.
   * @name Path#s
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  s = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey, true);

  /**
   * Smooth cubic curve to x, y using cx, cy as the control point. If relative is true, points are relative to current position.
   * @name Path#sCurveTo
   * @function
   * @param {number} cx - control point x coordinate
   * @param {number} cy - control point y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
  sCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Create arc with absolute positioning
   * @name Path#A
   * @function
   * @param {number} rx - x radius
   * @param {number} ry - y radius
   * @param {number} rotation - rotation
   * @param {boolean} arc - arc flag
   * @param {boolean} sweep - sweep flag
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  A = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey);

  /**
   * Create arc with relative positioning
   * @name Path#a
   * @function
   * @param {number} rx - x radius
   * @param {number} ry - y radius
   * @param {number} rotation - rotation
   * @param {boolean} arc - arc flag
   * @param {boolean} sweep - sweep flag
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  a = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey, true);

  /**
   * Create arc. If relative is true, points are relative to current position.
   * @name Path#arc
   * @function
   * @param {number} rx - x radius
   * @param {number} ry - y radius
   * @param {number} rotation - rotation
   * @param {boolean} arc - arc flag
   * @param {boolean} sweep - sweep flag
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @param {boolean} [relative=false] - relative move
   * @return {Path}
   */
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
   * @param {number} px - number of pixels to move down
   * @return {Path}
   */
  down = (px) => this.v(px);

  /**
   * Move up to relative point px away
   * @name Path#up
   * @function
   * @param {number} px - number of pixels to move up
   * @return {Path}
   */
  up = (px) => this.v(px * -1);

  /**
   * Move right to relative point px away
   * @name Path#right
   * @function
   * @param {number} px - number of pixels to move right
   * @return {Path}
   */
  right = (px) => this.h(px);

  /**
   * Move left to relative point px away
   * @name Path#left
   * @function
   * @param {number} px - number of pixels to move left
   * @return {Path}
   */
  left = (px) => this.h(px * -1);

  /**
   * Close path.
   * @name Path#toArray
   * @function
   * @return {Path}
   */
  close = () => {
    this.pathData.push('z');
    return this;
  };

  /**
   * Return pathData array.
   * @name Path#toArray
   * @function
   * @return {Array}
   */
  toArray = () => this.pathData;

  /**
   * Return joined pathData array.
   * @name Path#toString
   * @function
   * @return {string}
   */
  toString = () => this.pathData.join('');

  /**
   * Create dom-ready <path> element
   * @name Path#toElement
   * @function
   * @param {object} [attributes={}]
   * @return {Element}
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
