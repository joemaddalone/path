/**
 * @name Path#circle
 * @function
 * @param  {number} size - circumference
 * @param  {number} cx - center x coordinate
 * @param  {number} cy - center y coordinate
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 */
const circle = function (size, cx, cy, centerEnd = true) {
  return this.ellipse(size, size, cx, cy, centerEnd);
};

export default circle;
