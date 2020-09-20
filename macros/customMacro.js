import Path from '../web_modules/path.js';

Path.macro('square', function (size, x, y) {
  if (x && y) {
    this.M(x, y); // only move if x & y are defined
  }
  this.right(size).down(size).left(size).up(size);
  return this;
});

Path.macro('circle', function (radius, x, y) {
  if (x && y) {
    this.M(x, y); // only move if x & y are defined
  }
  this.m(-radius, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0);
  return this;
});

Path.macro('triangle', function (w, h, x, y) {
  this.M(x, y) // only move if x & y are defined
    .l(-w / 2, h)
    .right(w)
    .L(x, y);
  return this;
});

const customMacros = () => {
  const p = new Path();
  p.square(30, 25, 25)
    .square(50, 60, 15)
    .circle(15, 160, 40)
    .circle(25, 225, 40)
    .triangle(25, 25, 220, 30)
    .triangle(65, 50, 265, 15)
    .triangle(25, 25, 310, 30);
  return p.toElement({ stroke: '#222' });
};

export default customMacros;
