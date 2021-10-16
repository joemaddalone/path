/**
 * @name Path#polygon
 * @function
 * @param  {number[]} points
 */
const polygon = function (points) {
  this.polyline(points).close();
  return this;
};

export default polygon;
