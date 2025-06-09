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
  [cx ,cy] = this.nest(cx, cy);
  return this.rect(size, size, cx, cy, centerEnd);
};

export default square;
