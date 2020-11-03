# path

## Install

```bash
npm install --save @joemaddalone/path
```

## Basic Usage

```js
import Path from 'path';

const Square = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y) // move pen to x, y
    .right(size) // draw line right to relative "size" px
    .down(size) // draw line down to relative "size" px
    .left(size) // draw line left to relative "size" px
    .close() // draw line back to first point
    .fill('green'); // set fill color
  return path.toElement();
};
```


## Getting started

```
import Path from '@joemaddalone/path'
```

path is mostly helpful for building the commands needed for the "d" attribute of an svg path.

Most methods are direct translations from the [SVG Path specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

### Example

`<path d="M0 0, L0 100"></path>`

This path can be produced with:

```
const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100
```

## Path Commands

For every svg path command there is an equivalent command available in path.

- **A**(_rx,ry,rotation,arc,sweep,ex,ey_)
- **a**(_rx, ry,rotation,arc,sweep,ex,ey_)
- **C**(_cx1,cy1,cx2,cy2,ex,ey_)
- **c**(_cx1,cy1,cx2,cy2,ex,ey_)
- **H**(_x_)
- **h**(_x_)
- **L**(_x,y_)
- **l**(_x,y_)
- **M**(_x,y_)
- **m**(_x,y_)
- **Q**(_cx,cy,ex,ey_)
- **q**(_cx,cy,ex,ey_)
- **S**(_cx,cy,ex,ey_)
- **s**(_cx,cy,ex,ey_)
- **T**(_ex,ey_)
- **t**(_ex,ey_)
- **V**(_y_)
- **v**(_y_)

And then for most of these is there is a semantically named helper method. Not required, but for complex paths it may be easier to read for those not familiar with path commmands.

- **arc**(_rx,ry,rotation,arc,sweep,ex,ey,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to a
- **cCurve**(_cx,cy,ex,ey,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to c
- **horizontalTo**(_x,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to h
- **verticalTo**(_x,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to v
- **lineTo**(_x,y,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to l
- **moveTo**(_x,y,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to m
- **qCurve**(_cx,cy,ex,ey,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to q
- **sCurveTo**(_cx,cy,ex,ey,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to s
- **tCurveTo**(_cx,cy,ex,ey,relative = false_)
  - relative is optional, its default is false. Setting relative to true is equivalent to t

Some additional path command helpers:

- **down**(_px_)
  - Draw line from current position down by px
- **up**(_px_)
  - Draw line from current position up by px
- **right**(_px_)
  - Draw line from current position right by px
- **left**(_px_)
  - Draw line from current position left by px

One more path command helper

- **close**()
  - Produces a "Z" command which draws a stright line back to the first point of the path.

## Path Attributes

If you intend to output an actual path element and not just the set of commands attributes can be set on the element using the attr helper.

- **attr**(_key, value_)
  - example: `attr('id', 'my-id')` will result in `<path id="my-id"></path>`

Built-in attribute helpers

- **fill**(_val_)
- **stroke**(_val_)
- **strokeWidth**(_val_)
- **style**(_val_)

## Rendering

Depending on your needs there are few ways to use the data generated by path.

- **toArray**
- Returns an array of path commands
- **toString**
  - Returns a string of path commands
- **toElement**
  - Returns path element incuding attributes

## Macros

Macros are a way to save a common set of path steps for reuse.

**Example macro:**

```js
Path.macro('square', function (size, x, y) {
  return this.moveTo(x, y).right(size).down(size).left(size).up(size);
});
```

```
const p = new Path();
p.square(75, 18, 35);
```

These are so handy we have included a bunch!

## Shapes

- **.circle**(_size, cx, cy_)
 - .circle is drawn from center points (cx & cy). The cursor is then moved to the center points.
- **.ellipse**(_width, height, cx, cy_)
 - .ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.polygon**(_[points]_)
 - .polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.
- **.polygram**(_size, points, cx, cy, vertexSkip = 2_)
 - .polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.
- **.polyline**(_[points], relative = false_)
 - .polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.
- **.radialLines**(_outerSize, innerSize, points, cx, cy_)
 - .radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.
- **.rect**(_width, height, cx, cy_)
 - .rect is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.regPolygon**(_size, sides, cx, cy_)
 - .regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.
- **.sector**(_cx, cy, size, startAngle, endAngle_)
 - .sector is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.segment**(_cx, cy, size, startAngle, endAngle_)
 - .segment is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.square**(_size, cx, cy_)
 - .square is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.star**(_outerSize, innerSize, points, cx, cy_)
 - .star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.
- **.triangle**(_size, cx, cy_)
  - .triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.  

## License

MIT © [joemaddalone](https://github.com/joemaddalone)