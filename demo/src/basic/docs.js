export default {
  rect: {
    sig: '.rect(width, height, cx, cy)',
    description:
      '.rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  square: {
    sig: '.square(size, cx, cy)',
    description:
      '.square is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  triangle: {
    sig: '.triangle(size, cx, cy)',
    description:
      '.triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.',
  },
  regPolygon: {
    sig: '.regPolygon(size, sides, cx, cy)',
    description:
      '.regPolygon is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  star: {
    sig: '.star(size, points, cx, cy, innerRadius = size/5)',
    description:
      '.start is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  ellipse: {
    sig: '.ellipse(width, height, cx, cy)',
    description:
      '.ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  circle: {
    sig: '.circle(size, cx, cy)',
    description:
      '.circle is drawn from center points (cx & cy). The cursor is then moved to the center points.',
  },
  sector: {
    sig: '.sector(cx, cy, radius, startAngle, endAngle)',
    description:
      '.sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  segment: {
    sig: '.segment(cx, cy, radius, startAngle, endAngle)',
    description:
      '.segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
  polyline: {
    sig: '.polyline([points], relative = false)',
    description:
      '.polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
  },
  polygon: {
    sig: '.polygon([points])',
    description:
      '.polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
  },
  polygram: {
    sig: '.polygram(size, sides, cx, cy)',
    description:
      '.polygram is drawn from center point (cx & cy). The cursor is then moved to the center point.',
  },
};
