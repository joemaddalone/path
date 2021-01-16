export default {
  rect: {
    method: '.rect',
    args: 'width, height, cx, cy',
    description:
      '.rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  square: {
    method: '.square',
    args: 'size, cx, cy',
    description:
      '.square is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  triangle: {
    method: '.triangle',
    args: 'size, cx, cy',
    description:
      '.triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.',
  },
  regPolygon: {
    method: '.regPolygon',
    args: 'size, sides, cx, cy',
    description:
      '.regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
  },
  polygram: {
    method: '.polygram',
    args: 'size, points, cx, cy, vertexSkip = 2',
    description:
      '.polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.',
  },
  star: {
    method: '.star',
    args: 'outerSize, innerSize, points, cx, cy',
    description:
      '.star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
  },
  radialLines: {
    method: '.radialLines',
    args: 'outerSize, innerSize, points, cx, cy',
    description:
      '.radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
  },
  ellipse: {
    method: '.ellipse',
    args: 'width, height, cx, cy',
    description:
      '.ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  circle: {
    method: '.circle',
    args: 'size, cx, cy',
    description:
      '.circle is drawn from center points (cx & cy). The cursor is then moved to the center points.',
  },
  sector: {
    method: '.sector',
    args: 'cx, cy, size, startAngle, endAngle',
    description:
      '.sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  segment: {
    method: '.segment',
    args: 'cx, cy, size, startAngle, endAngle',
    description:
      '.segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  polyline: {
    method: '.polyline',
    args: '[points], relative = false',
    description:
      '.polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
  },
  polygon: {
    method: '.polygon',
    args: '[points]',
    description:
      '.polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
  },
  symX: {
    method: '.symX',
    args: 'width, height, cx, cy',
    description:
      '.X draws an X shape.',
  },
  symH: {
    method: '.symH',
    args: 'width, height, cx, cy',
    description:
      '.symH draws an H shape.',
  },
  symI: {
    method: '.symI',
    args: 'width, height, cx, cy',
    description:
      '.symI draws an I shape.',
  },
  cross: {
    method: '.cross',
    args: 'width, height, cx, cy',
    description:
      '.cross draws a cross shape.',
  },
};
