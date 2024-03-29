import Path from '@joemaddalone/path';

Path.macro('squareTest', function (size, x, y) {
  if (x && y) {
    this.M(x, y); // only move if x & y are defined
  }
  this.right(size).down(size).left(size).up(size);
  return this;
});

Path.macro('circleTest', function (radius, x, y) {
  if (x && y) {
    this.M(x, y); // only move if x & y are defined
  }
  this.m(-radius, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0);
  return this;
});

Path.macro('triangleTest', function (w, h, x, y) {
  this.M(x, y) // only move if x & y are defined
    .l(-w / 2, h)
    .right(w)
    .L(x, y);
  return this;
});

const customMacros = () => {
  const p = new Path();
  p.squareTest(30, 25, 25)
    .squareTest(50, 60, 15)
    .circleTest(15, 160, 40)
    .circleTest(25, 225, 40)
    .triangleTest(25, 25, 220, 30)
    .triangleTest(65, 50, 265, 15);
  return p.toElement({ stroke: '#222' });
};

export default customMacros;
