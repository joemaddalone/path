/**
 * @name Path#lens
 * @function
 * @param  {number} width
 * @param  {number} height
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
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
