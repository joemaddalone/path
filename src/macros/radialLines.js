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

export default radialLines;
