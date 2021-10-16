/**
 * @name Path#star
 * @function
 * @param  {number} outerSize
 * @param  {number} innerSize
 * @param  {number[]} points
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
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

export default star;
