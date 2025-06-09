/**
 * @name Path#symI
 * @function
 * @param  {number} width - The width of the symbol.
 * @param  {number} height - The height of the symbol.
 * @param  {number} cx - The x-coordinate of the center of the symbol.
 * @param  {number} cy - The y-coordinate of the center of the symbol.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const symI = function (width, height, cx, cy, centerEnd = true) {
  [cx ,cy] = this.nest(cx, cy);
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(r, t).M(cx, t).L(cx, b).M(l, b).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default symI;
