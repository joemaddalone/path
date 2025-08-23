import docs from "./docs";
import * as mathUtils from "./utils/math";

/**
 * Path Class - A comprehensive SVG path builder
 *
 * This class provides a fluent interface for building SVG path data strings.
 * It supports all standard SVG path commands (move, line, curve, arc) as well as
 * convenient shape methods (circle, rectangle, polygon, etc.).
 *
 * The class maintains internal state for path data, allowing
 * for method chaining and easy manipulation of SVG paths.
 *
 * @example
 * const path = new Path()
 *   .M(10, 10)           // Move to absolute position
 *   .l(50, 0)            // Draw line relative to current position
 *   .l(0, 50)            // Draw line relative to current position
 *   .close()             // Close the path
 */
export default class Path {
  /** Array to store SVG path command strings */
  private pathData: string[];

  /**
   * Constructor - Initializes a new Path instance
   *
   * Creates an empty path with no commands or attributes.
   * Returns the instance for method chaining.
   *
   * @returns {Path} The initialized Path instance
   */
  constructor() {
    this.pathData = [];
    return this;
  }

  // ============================================================================
  // STATIC UTILITY METHODS
  // ============================================================================

  /** Convert angle from degrees to radians */
  static angleInRadians = mathUtils.angleInRadians;

  /** Convert polar coordinates (radius, angle) to Cartesian coordinates (x, y) */
  static polarToCartesian = mathUtils.polarToCartesian;

  /** Calculate point position clockwise from center at given angle and radius */
  static clockwisePoint = mathUtils.clockwisePoint;

  /** Generate array of points in a circle at given radius and center */
  static radialPoints = mathUtils.radialPoints;

  /** Position elements in a grid based on array configuration */
  static positionByArray = mathUtils.positionByArray;

  /**
   * Macro system - Dynamically add methods to Path prototype
   *
   * This allows for runtime extension of the Path class with custom methods.
   * Useful for adding domain-specific path building functionality.
   *
   * @param {string} name - The name of the method to add
   * @param {Function} fn - The function to add as a method
   * @returns {Function} The added function
   *
   * @example
   * Path.macro('zigzag', function(width, height) {
   *   return this.M(0, 0).l(width/2, height).l(width/2, -height);
   * });
   */
  static macro = (name: string, fn: (...args: any[]) => any): Function => {
    (this.prototype as any)[name] = fn;
    return fn;
  };

  // ============================================================================
  // SVG PATH COMMANDS - SHORTCUT METHODS
  // ============================================================================

  /** Move to position (x, y) - relative coordinates */
  m = (x: number, y: number): Path => this.moveTo(x, y, true);

  /** Move to position (x, y) - absolute coordinates */
  M = (x: number, y: number): Path => this.moveTo(x, y);

  /** Draw line to position (x, y) - relative coordinates */
  l = (x: number, y: number): Path => this.lineTo(x, y, true);

  /** Draw line to position (x, y) - absolute coordinates */
  L = (x: number, y: number): Path => this.lineTo(x, y);

  /** Draw horizontal line to x - absolute coordinates */
  H = (x: number): Path => this.horizontalTo(x);

  /** Draw horizontal line to x - relative coordinates */
  h = (x: number): Path => this.horizontalTo(x, true);

  /** Draw vertical line to y - absolute coordinates */
  V = (y: number): Path => this.verticalTo(y);

  /** Draw vertical line to y - relative coordinates */
  v = (y: number): Path => this.verticalTo(y, true);

  /** Draw quadratic curve - absolute coordinates */
  Q = (cx: number, cy: number, ex: number, ey: number): Path =>
    this.qCurve(cx, cy, ex, ey);

  /** Draw quadratic curve - relative coordinates */
  q = (cx: number, cy: number, ex: number, ey: number): Path =>
    this.qCurve(cx, cy, ex, ey, true);

  /** Draw smooth quadratic curve - absolute coordinates */
  T = (ex: number, ey: number): Path => this.tCurveTo(ex, ey);

  /** Draw smooth quadratic curve - relative coordinates */
  t = (ex: number, ey: number): Path => this.tCurveTo(ex, ey, true);

  /** Draw cubic curve - absolute coordinates */
  C = (
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    ex: number,
    ey: number
  ): Path => this.cCurve(cx1, cy1, cx2, cy2, ex, ey);

  /** Draw cubic curve - relative coordinates */
  c = (
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    ex: number,
    ey: number
  ): Path => this.cCurve(cx1, cy1, cx2, cy2, ex, ey, true);

  /** Draw smooth cubic curve - absolute coordinates */
  S = (cx: number, cy: number, ex: number, ey: number): Path =>
    this.sCurveTo(cx, cy, ex, ey);

  /** Draw smooth cubic curve - relative coordinates */
  s = (cx: number, cy: number, ex: number, ey: number): Path =>
    this.sCurveTo(cx, cy, ex, ey, true);

  /** Draw arc - absolute coordinates */
  A = (
    rx: number,
    ry: number,
    rotation: number,
    arc: 1 | 0,
    sweep: 1 | 0,
    ex: number,
    ey: number
  ): Path => this.arc(rx, ry, rotation, arc, sweep, ex, ey);

  /** Draw arc - relative coordinates */
  a = (
    rx: number,
    ry: number,
    rotation: number,
    arc: 1 | 0,
    sweep: 1 | 0,
    ex: number,
    ey: number
  ): Path => this.arc(rx, ry, rotation, arc, sweep, ex, ey, true);

  /** Close path - absolute coordinates */
  Z = (): Path => this.close();

  /** Close path - relative coordinates */
  z = (): Path => this.close();

  // ============================================================================
  // FRIENDLY PATH COMMAND METHODS
  // ============================================================================

  /**
   * Move SVG cursor to position (x, y)
   *
   * This is the foundation command that sets the starting point for subsequent
   * drawing operations. If relative is true, coordinates are relative to the
   * current cursor position.
   *
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  moveTo = (x: number, y: number, relative = false): Path => {
    this.pathData.push(`${relative ? "m" : "M"}${x} ${y}`);
    return this;
  };

  /**
   * Draw a straight line to position (x, y)
   *
   * Creates a line segment from the current cursor position to the specified
   * coordinates. If relative is true, coordinates are relative to current position.
   *
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  lineTo = (x: number, y: number, relative = false): Path => {
    this.pathData.push(`${relative ? "l" : "L"}${x} ${y}`);
    return this;
  };

  /**
   * Draw a horizontal line to x coordinate
   *
   * Creates a horizontal line segment from the current cursor position.
   * Only the x coordinate changes; y remains the same.
   *
   * @param {number} x - X coordinate
   * @param {boolean} relative - Whether x is relative to current position (default: false)
   * @returns {Path} The Path instance for chaining
   */
  horizontalTo = (x: number, relative = false): Path => {
    this.pathData.push(`${relative ? "h" : "H"}${x}`);
    return this;
  };

  /**
   * Draw a vertical line to y coordinate
   *
   * Creates a vertical line segment from the current cursor position.
   * Only the y coordinate changes; x remains the same.
   *
   * @param {number} x - Y coordinate (parameter name is x for consistency)
   * @param {boolean} relative - Whether y is relative to current position (default: false)
   * @returns {Path} The Path instance for chaining
   */
  verticalTo = (x: number, relative = false): Path => {
    this.pathData.push(`${relative ? "v" : "V"}${x}`);
    return this;
  };

  /**
   * Draw a quadratic Bézier curve
   *
   * Creates a quadratic curve using a single control point (cx, cy) to define
   * the curve shape, ending at (ex, ey). The curve will pass through the
   * control point's influence area.
   *
   * @param {number} cx - Control point X coordinate
   * @param {number} cy - Control point Y coordinate
   * @param {number} ex - End point X coordinate
   * @param {number} ey - End point Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  qCurve = (
    cx: number,
    cy: number,
    ex: number,
    ey: number,
    relative = false
  ): Path => {
    this.pathData.push(`${relative ? "q" : "Q"}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Draw a smooth quadratic Bézier curve
   *
   * Creates a quadratic curve that smoothly continues from the previous curve.
   * The control point is automatically calculated based on the previous curve's
   * end point, creating a smooth transition.
   *
   * @param {number} ex - End point X coordinate
   * @param {number} ey - End point Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  tCurveTo = (ex: number, ey: number, relative = false): Path => {
    this.pathData.push(`${relative ? "t" : "T"}${ex} ${ey}`);
    return this;
  };

  /**
   * Draw a cubic Bézier curve
   *
   * Creates a cubic curve using two control points (cx1, cy1) and (cx2, cy2)
   * to define the curve shape, ending at (ex, ey). This provides more control
   * over the curve than quadratic curves.
   *
   * @param {number} cx1 - First control point X coordinate
   * @param {number} cy1 - First control point Y coordinate
   * @param {number} cx2 - Second control point X coordinate
   * @param {number} cy2 - Second control point Y coordinate
   * @param {number} ex - End point X coordinate
   * @param {number} ey - End point Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  cCurve = (
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    ex: number,
    ey: number,
    relative = false
  ): Path => {
    this.pathData.push(
      `${relative ? "c" : "C"}${cx1} ${cy1} ${cx2} ${cy2} ${ex} ${ey}`
    );
    return this;
  };

  /**
   * Draw a smooth cubic Bézier curve
   *
   * Creates a cubic curve that smoothly continues from the previous curve.
   * The first control point is automatically calculated, while the second
   * control point (cx, cy) is explicitly specified.
   *
   * @param {number} cx - Second control point X coordinate
   * @param {number} cy - Second control point Y coordinate
   * @param {number} ex - End point X coordinate
   * @param {number} ey - End point Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  sCurveTo = (
    cx: number,
    cy: number,
    ex: number,
    ey: number,
    relative = false
  ): Path => {
    this.pathData.push(`${relative ? "s" : "S"}${cx} ${cy} ${ex} ${ey}`);
    return this;
  };

  /**
   * Draw an elliptical arc
   *
   * Creates an arc segment of an ellipse. The arc is defined by:
   * - rx, ry: x and y radius of the ellipse
   * - rotation: rotation of the ellipse in degrees
   * - arc: large arc flag (0 = small arc, 1 = large arc)
   * - sweep: sweep flag (0 = counterclockwise, 1 = clockwise)
   * - ex, ey: end point coordinates
   *
   * @param {number} rx - X radius of the ellipse
   * @param {number} ry - Y radius of the ellipse
   * @param {number} rotation - Rotation of the ellipse in degrees
   * @param {1|0} arc - Large arc flag (0 = small, 1 = large)
   * @param {1|0} sweep - Sweep flag (0 = counterclockwise, 1 = clockwise)
   * @param {number} ex - End point X coordinate
   * @param {number} ey - End point Y coordinate
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  arc = (
    rx: number,
    ry: number,
    rotation: number,
    arc: 1 | 0,
    sweep: 1 | 0,
    ex: number,
    ey: number,
    relative = false
  ): Path => {
    this.pathData.push(
      `${
        relative ? "a" : "A"
      }${rx} ${ry} ${rotation} ${arc} ${sweep} ${ex} ${ey}`
    );
    return this;
  };

  /**
   * Close the current path
   *
   * Draws a straight line from the current position back to the starting point
   * of the current subpath, effectively closing the shape.
   *
   * @returns {Path} The Path instance for chaining
   */
  close = (): Path => {
    this.pathData.push("z");
    return this;
  };

  // ============================================================================
  // CONVENIENCE DIRECTIONAL METHODS
  // ============================================================================

  /** Move down by specified pixels (positive y direction) */
  down = (px: number): Path => this.v(px);

  /** Move up by specified pixels (negative y direction) */
  up = (px: number): Path => this.v(px * -1);

  /** Move right by specified pixels (positive x direction) */
  right = (px: number): Path => this.h(px);

  /** Move left by specified pixels (negative x direction) */
  left = (px: number): Path => this.h(px * -1);

  // ============================================================================
  // UTILITY AND OUTPUT METHODS
  // ============================================================================

  /**
   * Get the path data as an array of command strings
   *
   * Returns the internal pathData array containing all SVG path commands
   * that have been added to this path instance.
   *
   * @returns {string[]} Array of SVG path command strings
   */
  toArray = (): string[] => this.pathData;

  /**
   * Convert the path to an SVG path data string
   *
   * Joins all path commands into a single string suitable for use
   * as the 'd' attribute of an SVG path element.
   *
   * @returns {string} SVG path data string
   */
  toString = (): string => this.pathData.join("");

  /**
   * Convert path commands to structured array format
   *
   * Parses the path data into an array where each element contains:
   * - First element: the command letter (M, L, Q, etc.)
   * - Subsequent elements: the numeric parameters for that command
   *
   * @returns {Array<(string|number)[]>} Array of command arrays
   *
   * @example
   * // For path "M10 10 L20 20"
   * // Returns: [["M", 10, 10], ["L", 20, 20]]
   */
  toCommands = (): Array<(string | number)[]> => {
    return this.pathData.map((cmd) => {
      const result: (string | number)[] = [cmd.substr(0, 1)];
      const args = cmd.substr(1);
      if (args.length) {
        result.push(...args.split(" ").map(Number));
      }
      return result;
    });
  };

  /**
   * Convert path commands to annotated format with named parameters
   *
   * Uses the docs mapping to convert numeric parameters to named parameters
   * based on the command type. This makes the path data more readable
   * and self-documenting.
   *
   * @returns {Array<{fn: string, args?: Record<string, number>}>} Array of annotated commands
   *
   * @example
   * // For path "M10 10 L20 20"
   * // Returns: [{fn: "M", args: {x: 10, y: 10}}, {fn: "L", args: {x: 20, y: 20}}]
   */
  toAnnotatedCommands = (): Array<{
    fn: string;
    args?: Record<string, number>;
  }> => {
    const commands = this.toCommands();
    const mapped = commands.map((cmd) => {
      const fn = String(cmd.shift());
      const args = docs[fn as keyof typeof docs]?.args;
      if (args.length) {
        return {
          fn,
          args: args.reduce<Record<string, number>>((acc, argName, index) => {
            acc[argName] = cmd[index] as number;
            return acc;
          }, {}),
        };
      } else {
        return { fn };
      }
    });
    return mapped;
  };

  /**
   * Create an SVG path element from the current path
   *
   * Generates a DOM SVG path element with all the accumulated path data
   * and attributes. This is useful for programmatically creating SVG elements
   * that can be inserted into the DOM.
   *
   * @param {Record<string, any>} attributes - Additional attributes to apply to the element
   * @returns {SVGPathElement} SVG path element
   */
  toElement = (attributes = {}) => {
    const addAttributes = { ...attributes };
    const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    Object.keys(addAttributes).forEach((key) => {
      el.setAttribute(
        key,
        String((addAttributes as Record<string, unknown>)[key])
      );
    });
    el.setAttribute("d", this.toString());
    return el;
  };

  // ============================================================================
  // BASIC SHAPE METHODS
  // ============================================================================

  /**
   * Create a circle
   *
   * Draws a perfect circle using two arc commands. The circle is centered
   * at (cx, cy) with the specified size as diameter.
   *
   * @param {number} size - Diameter of the circle
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  circle = (size: number, cx: number, cy: number, centerEnd = true): Path =>
    this.ellipse(size, size, cx, cy, centerEnd);

  /**
   * Create an ellipse
   *
   * Draws an ellipse using two arc commands. The ellipse is centered
   * at (cx, cy) with the specified width and height as dimensions.
   *
   * @param {number} width - Width of the ellipse
   * @param {number} height - Height of the ellipse
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  ellipse = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create a kite shape
   *
   * Draws a kite (diamond-like shape) with adjustable height offset.
   * The kite has four points: top, left, bottom, and right.
   *
   * @param {number} width - Width of the kite
   * @param {number} height - Height of the kite
   * @param {number} dh - Height offset for left/right points (defaults to height * 0.33)
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  kite = (
    width: number,
    height: number,
    dh: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    dh = dh || Math.round(height * 0.33);
    const [t, _, b] = Path.radialPoints(height / 2, cx, cy, 4);
    const h = Number(t[1]) + dh;
    const points: [number, number][] = [
      [Number(t[0]), Number(t[1])],
      [cx - width / 2, h],
      [Number(b[0]), Number(b[1])],
      [cx + width / 2, h],
    ];
    this.polyline(points).close();
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create a polygon from an array of points
   *
   * Draws a closed polygon by connecting the provided points in sequence.
   * The polygon automatically closes by drawing a line back to the first point.
   *
   * @param {number[][]} points - Array of [x, y] coordinate pairs
   * @returns {Path} The Path instance for chaining
   */
  polygon = (points: number[][]): Path => {
    this.polyline(points).close();
    return this;
  };

  /**
   * Create a polygram (star-like polygon)
   *
   * Draws a polygram by connecting vertices with a specified skip pattern.
   * For example, with vertexSkip=2, it connects every other vertex, creating
   * a star pattern.
   *
   * @param {number} size - Size of the polygram
   * @param {number} points - Number of vertices
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {number} vertexSkip - How many vertices to skip when connecting (default: 2)
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  polygram = (
    size: number,
    points: number,
    cx: number,
    cy: number,
    vertexSkip = 2,
    centerEnd = true
  ): Path => {
    this.polygon(
      Path.radialPoints(size / 2, cx, cy, points, undefined, vertexSkip)
    );
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create a polyline from an array of points
   *
   * Draws a series of connected line segments through the provided points.
   * Unlike polygon, this does not automatically close the shape.
   *
   * @param {number[][]} points - Array of [x, y] coordinate pairs
   * @param {boolean} relative - Whether coordinates are relative (default: false)
   * @returns {Path} The Path instance for chaining
   */
  polyline = (points: number[][], relative = false): Path => {
    const clone = [...points];
    const start = clone.shift();
    const move = relative ? this.m : this.M;
    const line = relative ? this.l : this.L;
    move.apply(null, start as [number, number]);
    clone.forEach((val) => {
      line.apply(null, val as [number, number]);
    });
    return this;
  };

  /**
   * Create a rectangle
   *
   * Draws a rectangle centered at (cx, cy) with the specified width and height.
   * Uses the convenience directional methods for clean, readable code.
   *
   * @param {number} width - Width of the rectangle
   * @param {number} height - Height of the rectangle
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  rect = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create a regular polygon
   *
   * Draws a regular polygon with equal sides and angles. The polygon is
   * centered at (cx, cy) and inscribed in a circle of the specified size.
   *
   * @param {number} size - Diameter of the circumscribed circle
   * @param {number} sides - Number of sides in the polygon
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  regPolygon = (
    size: number,
    sides: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    this.polygon(Path.radialPoints(size / 2, cx, cy, sides));
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create a rounded rectangle
   *
   * Draws a rectangle with rounded corners. The radius is automatically
   * adjusted if it exceeds half the width or height of the rectangle.
   *
   * @param {number} width - Width of the rectangle
   * @param {number} height - Height of the rectangle
   * @param {number} radius - Corner radius
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  roundedRect = (
    width: number,
    height: number,
    radius: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create a rounded square
   *
   * Convenience method for creating a square with rounded corners.
   *
   * @param {number} size - Size of the square
   * @param {number} radius - Corner radius
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  roundedSquare = (
    size: number,
    radius: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    return this.roundedRect(size, size, radius, cx, cy, centerEnd);
  };

  /**
   * Create a square
   *
   * Convenience method for creating a square (equal width and height).
   *
   * @param {number} size - Size of the square
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  square = (size: number, cx: number, cy: number, centerEnd = true): Path => {
    return this.rect(size, size, cx, cy, centerEnd);
  };

  /**
   * Create a star shape
   *
   * Draws a star by alternating between inner and outer radius points.
   * The star has the specified number of points and uses two different
   * radii to create the characteristic star appearance.
   *
   * @param {number} outerSize - Diameter of outer circle for star points
   * @param {number} innerSize - Diameter of inner circle for star valleys
   * @param {number} points - Number of star points
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  star = (
    outerSize: number,
    innerSize: number,
    points: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    const innerRadius = innerSize / 2;
    const outerRadius = outerSize / 2;
    const increment = 360 / (points * 2);
    const vertexIndices = Array.from({ length: points * 2 });
    const verts = vertexIndices.map((p, i) => {
      let radius = i % 2 == 0 ? outerRadius : innerRadius;
      let degrees = increment * i;
      const { x, y } = Path.clockwisePoint(cx, cy, radius, degrees);
      return [x, y];
    });
    this.polygon(verts);
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create a triangle
   *
   * Draws an equilateral triangle centered at (cx, cy) with the specified size.
   * The triangle points upward by default.
   *
   * @param {number} size - Size of the triangle (length of each side)
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  triangle = (size: number, cx: number, cy: number, centerEnd = true): Path => {
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

  // ============================================================================
  // COMPLEX SHAPE METHODS
  // ============================================================================

  /**
   * Create a sector (pie slice)
   *
   * Draws a pie slice from startAngle to endAngle. The sector is filled
   * and includes lines from the center to both edges.
   *
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {number} size - Diameter of the circle
   * @param {number} startAngle - Starting angle in degrees
   * @param {number} endAngle - Ending angle in degrees
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  sector = (
    cx: number,
    cy: number,
    size: number,
    startAngle: number,
    endAngle: number,
    centerEnd = true
  ): Path => {
    const radius = size / 2;
    const start = Path.clockwisePoint(cx, cy, radius, endAngle);
    const end = Path.clockwisePoint(cx, cy, radius, startAngle);
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
   * Create a segment (arc without center lines)
   *
   * Draws an arc segment from startAngle to endAngle without filling
   * the center area. This creates just the curved edge.
   *
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {number} size - Diameter of the circle
   * @param {number} startAngle - Starting angle in degrees
   * @param {number} endAngle - Ending angle in degrees
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  segment = (
    cx: number,
    cy: number,
    size: number,
    startAngle: number,
    endAngle: number,
    centerEnd = true
  ): Path => {
    const radius = size / 2;
    const start = Path.clockwisePoint(cx, cy, radius, endAngle);
    const end = Path.clockwisePoint(cx, cy, radius, startAngle);
    const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

    this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y);
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create radial lines pattern
   *
   * Draws lines radiating from inner to outer circles at regular intervals.
   * Creates a sunburst or starburst effect.
   *
   * @param {number} outerSize - Diameter of outer circle
   * @param {number} innerSize - Diameter of inner circle
   * @param {number} points - Number of radial lines
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  radialLines = (
    outerSize: number,
    innerSize: number,
    points: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    const inner = Path.radialPoints(innerSize / 2, cx, cy, points);
    const outer = Path.radialPoints(outerSize / 2, cx, cy, points);

    inner.forEach((coords, index) => {
      this.M(coords[0], coords[1]).L(outer[index][0], outer[index][1]);
    });
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create a lens shape
   *
   * Draws a lens (oval with pointed ends) using quadratic curves.
   * The lens is centered at (cx, cy) with the specified width and height.
   *
   * @param {number} width - Width of the lens
   * @param {number} height - Height of the lens
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  lens = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    this.M(cx - width / 2, cy)
      .Q(cx, cy - height, cx + width / 2, cy)
      .Q(cx, cy + height, cx - width / 2, cy);
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create an omino pattern
   *
   * Draws a pattern based on a grid arrangement where each cell can be
   * connected to its neighbors. The shape array defines which cells are
   * occupied, and the method draws lines between adjacent cells.
   *
   * @param {number} size - Size of each grid cell
   * @param {any[]} shape - 2D array defining the pattern (1 = occupied, 0 = empty)
   * @param {number} sx - Starting X coordinate
   * @param {number} sy - Starting Y coordinate
   * @param {boolean} lined - Whether to always draw lines (default: false)
   * @returns {Path} The Path instance for chaining
   */
  omino = (
    size: number,
    shape: any[],
    sx: number,
    sy: number,
    lined = false
  ): Path => {
    const arrangement = Path.positionByArray(size, shape, sx, sy);
    arrangement.forEach((r, _, arr) => {
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
   * Create an isometric cube
   *
   * Draws a hexagon (top view of cube) with lines extending from inner
   * to outer points to create a 3D cube effect.
   *
   * @param {number} size - Size of the cube
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  isocube = (size: number, cx: number, cy: number, centerEnd = true): Path => {
    this.regPolygon(size, 6, cx, cy, centerEnd);

    const inner = Path.radialPoints(0 / 2, cx, cy, 6);
    const outer = Path.radialPoints(size / 2, cx, cy, 6);
    const top = [1, 3, 5];

    top.forEach((index) => {
      this.M(Number(inner[index][0]), Number(inner[index][1])).L(
        Number(outer[index][0]),
        Number(outer[index][1])
      );
    });

    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  // ============================================================================
  // SYMMETRY PATTERN METHODS
  // ============================================================================

  /**
   * Create a cross shape
   *
   * Draws a cross with horizontal and vertical lines intersecting at center.
   * The cross extends width/2 pixels left and right, height/2 pixels up and down.
   *
   * @param {number} width - Width of the cross
   * @param {number} height - Height of the cross
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  cross = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create an H-shaped symmetry pattern
   *
   * Draws an H shape with vertical lines on left and right sides,
   * connected by a horizontal line in the center.
   *
   * @param {number} width - Width of the H pattern
   * @param {number} height - Height of the H pattern
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  symH = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create an I-shaped symmetry pattern
   *
   * Draws an I shape with horizontal lines on top and bottom,
   * connected by a vertical line in the center.
   *
   * @param {number} width - Width of the I pattern
   * @param {number} height - Height of the I pattern
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  symI = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
   * Create a V-shaped symmetry pattern
   *
   * Draws a V shape with lines from the top corners meeting at the center bottom.
   *
   * @param {number} width - Width of the V pattern
   * @param {number} height - Height of the V pattern
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  symV = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
    const l = cx - width / 2;
    const r = l + width;
    const t = cy - height / 2;
    const b = t + height;
    this.M(l, t).L(cx, b).L(r, t);
    if (centerEnd) {
      this.M(cx, cy);
    }
    return this;
  };

  /**
   * Create an X-shaped symmetry pattern
   *
   * Draws an X shape with diagonal lines crossing at the center.
   *
   * @param {number} width - Width of the X pattern
   * @param {number} height - Height of the X pattern
   * @param {number} cx - Center X coordinate
   * @param {number} cy - Center Y coordinate
   * @param {boolean} centerEnd - Whether to end at center (default: true)
   * @returns {Path} The Path instance for chaining
   */
  symX = (
    width: number,
    height: number,
    cx: number,
    cy: number,
    centerEnd = true
  ): Path => {
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
}
