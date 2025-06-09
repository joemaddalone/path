/**
 * @name Path#ellipse
 * @function
 * @param  {number} width - The width of the ellipse.
 * @param  {number} height - The height of the ellipse.
 * @param  {number} cx - The x coordinate of the center of the ellipse.
 * @param  {number} cy - The y coordinate of the center of the ellipse.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const ellipse = function (width, height, cx, cy, centerEnd = true) {
  [cx ,cy] = this.nest(cx, cy);
  const rx = width / 2;
  const ry = height / 2;

  this.M(cx + rx, cy)
    .A(rx, ry, 0, 0, 1, cx - rx, cy)
    .A(rx, ry, 0, 0, 1, cx + rx, cy)
    .close();
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default ellipse;
