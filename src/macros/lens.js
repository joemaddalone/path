/**
 * @name Path#lens
 * @function
 * @param  {number} width - The width of the lens.
 * @param  {number} height - The height of the lens.
 * @param  {number} cx - The x-coordinate of the center of the lens.
 * @param  {number} cy - The y-coordinate of the center of the lens.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 */
const lens = function (width, height, cx, cy, centerEnd = true) {
  this.M(cx - width / 2, cy)
    .Q(cx, cy - height, cx + width / 2, cy)
    .Q(cx, cy + height, cx - width / 2, cy);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default lens;
