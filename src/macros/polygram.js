/**
 * @name Path#polygram
 * @function
 * @param  {number} size
 * @param  {number[]} points
 * @param  {number} cx
 * @param  {number} cy
 * @param  {number} [vertexSkip=2]
 * @param  {boolean} [centerEnd=true]
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

export default polygram;
