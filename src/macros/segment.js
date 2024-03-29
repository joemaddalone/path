/**
 * @name Path#segment
 * @function
 * @param  {number} cx - The x-coordinate of the center of the circle.
 * @param  {number} cy - The y-coordinate of the center of the circle.
 * @param  {number} size - The radius of the circle.
 * @param  {number} startAngle - The starting angle of the segment.
 * @param  {number} endAngle - The ending angle of the segment.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const segment = function (
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  centerEnd = true,
) {
  const radius = size / 2;
  const start = this.constructor.clockwisePoint(
    cx,
    cy,
    radius,
    endAngle,
  );
  const end = this.constructor.clockwisePoint(
    cx,
    cy,
    radius,
    startAngle,
  );
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default segment;
