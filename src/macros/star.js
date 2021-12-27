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
    let degrees = increment * i;
    const { x, y } = this.constructor.clockwisePoint(
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

export default star;
