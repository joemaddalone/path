/**
 * @name Path#circle
 * @function
 * @param  {number} size - circumference
 * @param  {number} cx - center x coordinate
 * @param  {number} cy - center y coordinate
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const circle = function (size, cx, cy, centerEnd = true) {
  return this.ellipse(size, size, cx, cy, centerEnd);
};

/**
 * @name Path#cross
 * @function
 * @param  {number} width - The width of the cross.
 * @param  {number} height - The height of the cross.
 * @param  {number} cx - The x-coordinate of the center of the cross.
 * @param  {number} cy - The y-coordinate of the center of the cross.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#ellipse
 * @function
 * @param  {number} width - The width of the ellipse.
 * @param  {number} height - The height of the ellipse.
 * @param  {number} cx - The x coordinate of the center of the ellipse.
 * @param  {number} cy - The y coordinate of the center of the ellipse.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#lens
 * @function
 * @param  {number} width - The width of the lens.
 * @param  {number} height - The height of the lens.
 * @param  {number} cx - The x-coordinate of the center of the lens.
 * @param  {number} cy - The y-coordinate of the center of the lens.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const lens = function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy)
    .Q(cx, cy - height, cx + width / 2, cy)
    .Q(cx, cy + height, cx - width / 2, cy);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

/**
 * @name Path#omino
 * @function
 * @param  {number} size - The size of each element.
 * @param  {any[]} shape - The shape of the array.
 * @param  {number} sx - The x-coordinate of the start point.
 * @param  {number} sy - The y-coordinate of the start point.
 * @param  {boolean} [lined=false] - Whether to draw a line between each element.
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#polygon
 * @function
 * @param  {number[]} points - Array of points
 * @return {Path} the path object for chaining
 */
const polygon = function (points) {
  this.polyline(points).close();
  return this;
};

/**
 * @name Path#polygram
 * @function
 * @param  {number} size - The size of the polygram.
 * @param  {number[]} points - The points of the polygram.
 * @param  {number} cx - The x-coordinate of the center of the polygram.
 * @param  {number} cy - The y-coordinate of the center of the polygram.
 * @param  {number} [vertexSkip=2] - The number of vertices to skip.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#polyline
 * @function
 * @param  {number[]} points - Array of points
 * @param  {boolean} [relative=false] - If true, the points are relative to the current position
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#radialLines
 * @function
 * @param  {number} outerSize - Outer size of the radial lines.
 * @param  {number} innerSize - Inner size of the radial lines.
 * @param  {number} points - Number of points to draw.
 * @param  {number[]} cx - Center x coordinates.
 * @param  {number} cy - Center y coordinates.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#rect
 * @function
 * @param  {number} width - The width of the rectangle.
 * @param  {number} height - The height of the rectangle.
 * @param  {number} cx - The x-coordinate of the center of the rectangle.
 * @param  {number} cy - The y-coordinate of the center of the rectangle.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#regPolygon
 * @function
 * @param  {number} size - The size of the regular polygon.
 * @param  {number} sides - The number of sides of the regular polygon.
 * @param  {number} cx - The x-coordinate of the center of the regular polygon.
 * @param  {number} cy - The y-coordinate of the center of the regular polygon.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const regPolygon = function (size, sides, cx, cy, centerEnd = true) {
  this.polygon(this.constructor.radialPoints(size / 2, cx, cy, sides));
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

/**
 * @name Path#roundedRect
 * @function
 * @param  {number} width - The width of the rect.
 * @param  {number} height - The height of the rect.
 * @param  {number} radius - The radius of the rounded corners.
 * @param  {number} cx - The x-coordinate of the center of the square.
 * @param  {number} cy - The y-coordinate of the center of the square.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#roundedSquare
 * @function
 * @param  {number} size - The size of the square.
 * @param  {number} radius - The radius of the rounded corners.
 * @param  {number} cx - The x-coordinate of the center of the square.
 * @param  {number} cy - The y-coordinate of the center of the square.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const roundedSquare = function (size, radius, cx, cy, centerEnd = true) {
  return this.roundedRect(size, size, radius, cx, cy, centerEnd);
};

/**
 * @name Path#sector
 * @function
 * @param  {number} cx - The x coordinate of the center of the sector.
 * @param  {number} cy - The y coordinate of the center of the sector.
 * @param  {number} size - The size of the sector.
 * @param  {number} startAngle - The start angle of the sector.
 * @param  {number} endAngle - The end angle of the sector.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#segment
 * @function
 * @param  {number} cx - The x-coordinate of the center of the circle.
 * @param  {number} cy - The y-coordinate of the center of the circle.
 * @param  {number} size - The radius of the circle.
 * @param  {number} startAngle - The starting angle of the segment.
 * @param  {number} endAngle - The ending angle of the segment.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#square
 * @function
 * @param  {number} size - The size of the square.
 * @param  {number} cx - The x-coordinate of the center of the square.
 * @param  {number} cy - The y-coordinate of the center of the square.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const square = function (size, cx, cy, centerEnd = true) {
  return this.rect(size, size, cx, cy, centerEnd);
};

/**
 * @name Path#star
 * @function
 * @param  {number} outerSize - Outer radius of the star.
 * @param  {number} innerSize - Inner radius of the star.
 * @param  {number[]} points - Array of angles of the star points.
 * @param  {number} cx - Center x coordinate.
 * @param  {number} cy - Center y coordinate.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#symH
 * @function
 * @param  {number} width - The width of the symbol.
 * @param  {number} height - The height of the symbol.
 * @param  {number} cx - The x-coordinate of the center of the symbol.
 * @param  {number} cy - The y-coordinate of the center of the symbol.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#symI
 * @function
 * @param  {number} width - The width of the symbol.
 * @param  {number} height - The height of the symbol.
 * @param  {number} cx - The x-coordinate of the center of the symbol.
 * @param  {number} cy - The y-coordinate of the center of the symbol.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#symX
 * @function
 * @param  {number} width - The width of the symbol.
 * @param  {number} height - The height of the symbol.
 * @param  {number} cx - The x-coordinate of the center of the symbol.
 * @param  {number} cy - The y-coordinate of the center of the symbol.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @name Path#triangle
 * @function
 * @param  {number} size - The size of the triangle.
 * @param  {number} cx - The x-coordinate of the center of the triangle.
 * @param  {number} cy - The y-coordinate of the center of the triangle.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
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

/**
 * @class Path
 */
class Path {
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
   * @param {number} angleInDegrees - angle in degrees
   * @returns {object} cartesian coordinates
   */
  static polarToCartesian = (cx, cy, radius, angleInDegrees) => {
    const radians = Path.angleInRadians(angleInDegrees);

    return {
      x: cx + radius * Math.cos(radians),
      y: cy + radius * Math.sin(radians),
    };
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
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  Q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey);

  /**
   * Draw quadratic curve to relative ex, ey using relative cx,cy as the control point.
   * @name Path#q
   * @function
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
   * @param {number} ex - end x coordinate
   * @param {number} ey - end y coordinate
   * @return {Path}
   */
  q = (cx, cy, ex, ey) => this.qCurve(cx, cy, ex, ey, true);

  /**
   * Draw quadratic curve to ex, ey using cx,cy as the control point. If relative is true, points are relative to current position.
   * @name Path#qCurve
   * @function
   * @param {number} cx - center x coordinate
   * @param {number} cy - center y coordinate
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

export default Path;
