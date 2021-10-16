/**
 * @name Path#sector
 * @function
 * @param  {number} cx - The x coordinate of the center of the sector.
 * @param  {number} cy - The y coordinate of the center of the sector.
 * @param  {number} size - The size of the sector.
 * @param  {number} startAngle - The start angle of the sector.
 * @param  {number} endAngle - The end angle of the sector.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const sector = function (cx, cy, size, startAngle, endAngle, centerEnd = true) {
  const radius = size / 2;
  const start = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    endAngle - 90,
  );
  const end = this.constructor.polarToCartesian(
    cx,
    cy,
    radius,
    startAngle - 90,
  );
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(cx, cy)
    .L(start.x, start.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default sector;
