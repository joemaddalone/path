/**
 * @name Path#circle
 * @function
 * @param  {number} size - circumferene
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const circle = function (size, cx, cy, centerEnd = true) {
  return this.ellipse(size, size, cx, cy, centerEnd);
};

export default circle;
