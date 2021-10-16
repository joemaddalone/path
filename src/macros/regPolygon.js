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

export default regPolygon;
