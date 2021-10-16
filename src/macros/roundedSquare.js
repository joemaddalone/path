/**
 * @name Path#roundedSquare
 * @function
 * @param  {number} size - The size of the square.
 * @param  {number} radius - The radius of the rounded corners.
 * @param  {number} cx - The x-coordinate of the center of the square.
 * @param  {number} cy - The y-coordinate of the center of the square.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 */
const roundedSquare = function (size, radius, cx, cy, centerEnd = true) {
  return this.roundedRect(size, size, radius, cx, cy, centerEnd);
};

export default roundedSquare;
