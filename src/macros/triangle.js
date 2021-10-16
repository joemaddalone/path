/**
 * @name Path#triangle
 * @function
 * @param  {number} size
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const triangle = function (size, cx, cy, centerEnd = true) {
  const sq3 = Math.sqrt(3);
  const a = [cx, cy - (sq3 / 3) * size];
  const b = [cx - size / 2, cy + (sq3 / 6) * size];
  const c = [cx + size / 2, cy + (sq3 / 6) * size];
  this.polygon([a, b, c]);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default triangle;
