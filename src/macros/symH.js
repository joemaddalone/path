/**
 * @name Path#symH
 * @function
 * @param  {number} width
 * @param  {number} height
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const symH = function (width, height, cx, cy, centerEnd = true) {
  const l = cx - width / 2;
  const r = l + width;
  const t = cy - height / 2;
  const b = t + height;
  this.M(l, t).L(l, b).M(l, cy).L(r, cy).M(r, t).L(r, b);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default symH;
