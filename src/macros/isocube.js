/**
 * @name Path#isocube
 * @function
 * @param  {number} size - The size of the regular polygon.
 * @param  {number} cx - The x-coordinate of the center of the regular polygon.
 * @param  {number} cy - The y-coordinate of the center of the regular polygon.
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const isocube = function (size, cx, cy, centerEnd = true) {
    [cx ,cy] = this.nest(cx, cy);
    this.regPolygon(size, 6, cx, cy, centerEnd)

    const inner = this.constructor.radialPoints(0 / 2, cx, cy, 6);
    const outer = this.constructor.radialPoints(size / 2, cx, cy, 6);

    const top = [1,3,5]
    // const bottom = [0,2,4]

    top.forEach((index) => {
        this.M(inner[index][0], inner[index][1]).L(outer[index][0], outer[index][1]);
    })
    // bottom.forEach((index) => {
    //     this.M(inner[index][0], inner[index][1]).L(outer[index][0], outer[index][1]);
    // })

    if (centerEnd) {
        this.M(cx, cy);
    }
    return this;
};

export default isocube;
