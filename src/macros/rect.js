/**
 * @name Path#rect
 * @function
 * @param  {number} width - The width of the rectangle.
 * @param  {number} height - The height of the rectangle.
 * @param  {number} cx - The x-coordinate of the center of the rectangle.
 * @param  {number} cy - The y-coordinate of the center of the rectangle.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 */
const rect = function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy - height / 2)
    .right(width)
    .down(height)
    .left(width)
    .up(height);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default rect;
