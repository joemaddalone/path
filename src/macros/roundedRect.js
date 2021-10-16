/**
 * @name Path#roundedRect
 * @function
 * @param  {number} width
 * @param  {number} height
 * @param  {number} radius
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const roundedRect = function (width, height, radius, cx, cy, centerEnd = true) {
  const top = cy - height / 2;
  const left = cx - width / 2;
  const right = left + width;
  const bottom = top + height;
  let rx = Math.min(radius, width / 2);
  rx = rx < 0 ? 0 : rx;
  let ry = Math.min(radius, height / 2);
  ry = ry < 0 ? 0 : ry;
  const wr = Math.max(width - rx * 2, 0);
  const hr = Math.max(height - ry * 2, 0);

  this.M(left + rx, top)
    .right(wr)
    .A(rx, ry, 0, 0, 1, right, top + ry)
    .down(hr)
    .A(rx, ry, 0, 0, 1, right - rx, bottom)
    .left(wr)
    .A(rx, ry, 0, 0, 1, left, bottom - ry)
    .up(hr)
    .A(rx, ry, 0, 0, 1, left + rx, top)
    .M(left, top);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default roundedRect;
