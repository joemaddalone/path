/**
 * @name Path#cross
 * @function
 * @param  {number} width
 * @param  {number} height
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const cross = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, cy).L(r, cy).M(cx, b).L(cx, t);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default cross;
