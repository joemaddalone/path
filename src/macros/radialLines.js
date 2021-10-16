/**
 * @name Path#radialLines
 * @function
 * @param  {number} outerSize
 * @param  {} innerSize
 * @param  {number} points
 * @param  {number[]} cx
 * @param  {number} cy
 * @param  {boolean} centerEnd=true
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
