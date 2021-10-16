/**
 * @name Path#square
 * @function
 * @param  {number} size
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const square = function (size, cx, cy, centerEnd = true) {
  return this.rect(size, size, cx, cy, centerEnd);
};

export default square;
