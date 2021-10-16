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

export default triangle;
