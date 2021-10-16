/**
 * @name Path#rect
 * @function
 * @param  {number} width
 * @param  {number} height
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
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
