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
  [cx ,cy] = this.nest(cx, cy);
  this.polygon(
    this.constructor.radialPoints(size / 2, cx, cy, points, null, vertexSkip),
  );
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default polygram;
