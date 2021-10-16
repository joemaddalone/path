/**
 * @name Path#roundedRect
 * @function
 * @param  {number} width - The width of the rect.
 * @param  {number} height - The height of the rect.
 * @param  {number} radius - The radius of the rounded corners.
 * @param  {number} cx - The x-coordinate of the center of the square.
 * @param  {number} cy - The y-coordinate of the center of the square.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
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
