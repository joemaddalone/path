/**
 * @name Path#polygon
 * @function
 * @param  {number[]} points - Array of points
 * @return {Path} the path object for chaining
 */
const polygon = function (points) {
  this.polyline(points).close();
  return this;
};

export default polygon;
