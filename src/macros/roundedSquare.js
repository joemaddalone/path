/**
 * @name Path#roundedSquare
 * @function
 * @param  {number} size
 * @param  {number} radius
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const roundedSquare = function (size, radius, cx, cy, centerEnd = true) {
  return this.roundedRect(size, size, radius, cx, cy, centerEnd);
};

export default roundedSquare;
