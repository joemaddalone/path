export default {
  circle: {
    method: 'circle',
    args: ['size, cx, cy'],
    description:
      '.circle is drawn from center points (cx & cy). The cursor is then moved to the center points.',
    demo: {
      w: 140,
      h: 120,
      args: [[95, 50, 50]],
    },
  },
  cross: {
    method: 'cross',
    args: ['width, height, cx, cy'],
    description: '.cross draws a cross shape.',
    demo: {
      w: 120,
      h: 120,
      args: [[100, 100, 60, 60]],
    },
  },
  ellipse: {
    method: 'ellipse',
    args: ['width, height, cx, cy'],
    description:
      '.ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 155,
      h: 120,
      args: [[150, 75, 80, 50]],
    },
  },
  kite: {
    method: 'kite',
    args: ['width, height, dh, cx, cy'],
    description:
      '.kite is drawn from center point (cx & cy). dh = position of the left & right points from the top of the shape. The cursor is then moved to the center point.',
    demo: {
      w: 155,
      h: 120,
      args: [[70, 100, 25, 80, 50]],
    },
  },
  lens: {
    method: 'lens',
    args: ['width, height, cx, cy'],
    description:
      '.lens is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 155,
      h: 120,
      args: [[150, 75, 80, 50]],
    },
  },
  omino: {
    method: 'omino',
    args: ['size, [shape], sx, sy, lined = false'],
    description:
      '.omino is drawn based on the positive values positioned in an 2d array.  Think Tetris pieces.',
    demo: {
      w: 400,
      h: 90,
      args: [
        [15, [[1], [1], [1, 1]], 10, 0],
        [15, [[1], [1], [1, 1]], 60, 0, true],
        [15, [[1, 1, 1, 1]], 10, 60],
        [15, [[1, 1, 1, 1]], 90, 60, true],
        [
          15,
          [
            [1, 1],
            [0, 1, 1],
          ],
          100,
          0,
        ],
        [
          15,
          [
            [1, 1],
            [0, 1, 1],
          ],
          150,
          0,
          true,
        ],
      ],
    },
  },
  polygon: {
    method: 'polygon',
    args: ['[points]'],
    description:
      '.polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
    demo: {
      w: 140,
      h: 120,
      args: [
        [
          [
            [10, 60],
            [40, 0],
            [70, 60],
            [40, 120],
          ],
        ],
      ],
    },
  },
  polygram: {
    method: 'polygram',
    args: ['size, points, cx, cy, vertexSkip = 2'],
    description:
      '.polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.',
    demo: {
      w: 140,
      h: 120,
      args: [[100, 7, 50, 50]],
    },
  },
  polyline: {
    method: 'polyline',
    args: ['[points], relative = false'],
    description:
      '.polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
    demo: {
      w: 140,
      h: 120,
      args: [
        [
          [
            [10, 60],
            [40, 0],
            [70, 60],
            [40, 120],
          ],
        ],
      ],
    },
  },
  radialLines: {
    method: 'radialLines',
    args: ['outerSize, innerSize, points, cx, cy'],
    description:
      '.radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[60, 120, 8, 70, 60]],
    },
  },
  rect: {
    method: 'rect',
    args: ['width, height, cx, cy'],
    description:
      '.rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[120, 60, 60, 60]],
    },
  },
  regPolygon: {
    method: 'regPolygon',
    args: ['size, sides, cx, cy'],
    description:
      '.regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[100, 6, 50, 50]],
    },
  },
  roundedRect: {
    method: 'roundedRect',
    args: ['width, height, radius, cx, cy'],
    description:
      '.roundedRect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[120, 60, 20, 62, 62]],
    },
  },
  roundedSquare: {
    method: 'roundedSquare',
    args: ['size, radius, cx, cy'],
    description:
      '.roundedSquare is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[100, 15, 55, 60]],
    },
  },
  sector: {
    method: 'sector',
    args: ['cx, cy, size, startAngle, endAngle'],
    description:
      '.sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[60, 60, 100, 0, 270]],
    },
  },
  segment: {
    method: 'segment',
    args: ['cx, cy, size, startAngle, endAngle'],
    description:
      '.segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[60, 60, 100, 0, 270]],
    },
  },
  square: {
    method: 'square',
    args: ['size, cx, cy'],
    description:
      '.square is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[100, 50, 60]],
    },
  },
  star: {
    method: 'star',
    args: ['outerSize, innerSize, points, cx, cy'],
    description:
      '.star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[120, 40, 5, 70, 60]],
    },
  },
  symH: {
    method: 'symH',
    args: ['width, height, cx, cy'],
    description: '.symH draws an H shape.',
    demo: {
      w: 200,
      h: 120,
      args: [[150, 100, 100, 60]],
    },
  },
  symI: {
    method: 'symI',
    args: ['width, height, cx, cy'],
    description: '.symI draws an I shape.',
    demo: {
      w: 120,
      h: 120,
      args: [[100, 100, 60, 60]],
    },
  },
  symV: {
    method: 'symV',
    args: ['width, height, cx, cy'],
    description: '.symV draws a V shape.',
    demo: {
      w: 120,
      h: 120,
      args: [[100, 100, 60, 60]],
    },
  },
  symX: {
    method: 'symX',
    args: ['width, height, cx, cy'],
    description: '.symX draws an X shape.',
    demo: {
      w: 120,
      h: 120,
      args: [[100, 100, 60, 60]],
    },
  },
  triangle: {
    method: 'triangle',
    args: ['size, cx, cy'],
    description:
      '.triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.',
    demo: {
      w: 140,
      h: 120,
      args: [[95, 50, 60]],
    },
  },
};
