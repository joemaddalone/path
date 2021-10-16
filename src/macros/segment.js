/**
 * @name Path#segment
 * @function
 * @param  {number} cx
 * @param  {number} cy
 * @param  {number} size
 * @param  {number} startAngle
 * @param  {number} endAngle
 * @param  {boolean} [centerEnd=true]
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

  this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y);
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default segment;
