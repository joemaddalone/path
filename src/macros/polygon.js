/**
 * @name Path#polygon
 * @function
 * @param  {number[]} points - Array of points
 */
const polygon = function (points) {
  this.polyline(points).close();
  return this;
};

export default polygon;
