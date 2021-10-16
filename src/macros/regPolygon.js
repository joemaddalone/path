/**
 * @name Path#regPolygon
 * @function
 * @param  {number} size
 * @param  {number} sides
 * @param  {number} cx
 * @param  {number} cy
 * @param  {boolean} [centerEnd=true]
 */
const regPolygon = function (size, sides, cx, cy, centerEnd = true) {
  this.polygon(this.constructor.radialPoints(size / 2, cx, cy, sides));
  if (centerEnd) {
    this.M(cx, cy);
  }
  return this;
};

export default regPolygon;
