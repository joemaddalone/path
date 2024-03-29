/**
 * @name Path#omino
 * @function
 * @param  {number} size - The size of each element.
 * @param  {any[]} shape - The shape of the array.
 * @param  {number} sx - The x-coordinate of the start point.
 * @param  {number} sy - The y-coordinate of the start point.
 * @param  {boolean} [lined=false] - Whether to draw a line between each element.
 * @return {Path} the path object for chaining
 */
const omino = function (size, shape, sx, sy, lined = false) {
  const arrangement = this.constructor.positionByArray(size, shape, sx, sy);
  arrangement.forEach((r, index, arr) => {
    const { cx, cy, ri, ci, size } = r;
    const halfSize = size / 2;
    const hasLeftSib = arr.find((a) => a.ri === ri && a.ci === ci - 1);
    const hasRightSib = arr.find((a) => a.ri === ri && a.ci === ci + 1);
    const hasUpSib = arr.find((a) => a.ri === ri - 1 && a.ci === ci);
    const hasDownSib = arr.find((a) => a.ri === ri + 1 && a.ci === ci);
    const left = cx - halfSize;
    const right = cx + halfSize;
    const top = cy - halfSize;
    const bottom = cy + halfSize;
    if (!hasLeftSib || lined) {
      // draw left line
      this.M(left, top);
      this.v(size);
    }
    if (!hasRightSib) {
      // draw right line
      this.M(right, top);
      this.v(size);
    }
    if (!hasUpSib || lined) {
      // draw top line
      this.M(left, top);
      this.h(size);
    }
    if (!hasDownSib) {
      // draw bottom line
      this.M(left, bottom);
      this.h(size);
    }
  });
  return this;
};

export default omino;
