/**
 * @name Path#polyline
 * @function
 * @param  {number[]} points
 * @param  {boolean} [relative=false]
 */
const polyline = function (points, relative = false) {
  const clone = [...points];
  const start = clone.shift();
  const move = relative ? this.m : this.M;
  const line = relative ? this.l : this.L;
  move.apply(null, start);
  clone.forEach((val) => {
    line.apply(null, val);
  });
  return this;
};

export default polyline;
