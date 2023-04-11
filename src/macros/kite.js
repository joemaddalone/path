/**
 * @name Path#kite
 * @functiondh
 * @param  {number} width - circumference
 * @param  {number} height - circumference
 * @param  {number} dh - diagonal horizontal offset from top
 * @param  {number} cx - center x coordinate
 * @param  {number} cy - center y coordinate
 * @param  {boolean} [centerEnd=true] - if false, the final position of the cursor is at the end of the path
 * @return {Path} the path object for chaining
 */
const kite = function (width, height, dh, cx, cy, centerEnd = true) {
	dh = dh || parseInt(height * 0.33, 10);
	const [t, _, b] = this.constructor.radialPoints(height / 2, cx, cy, 4);
	const h = parseInt(t[1], 10) + dh;
	const points = [t, [cx - width / 2, h], b, [cx + width / 2, h]];
	return this.polyline(points).close();
  };
  
  export default kite;