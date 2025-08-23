import { expect, test, describe, beforeEach } from "vitest";
import Path from "./index";

describe("Path class", () => {
  let path;

  beforeEach(() => {
    path = new Path();
  });

  test("Path inits with an empty array", () => {
    expect(path.toArray() instanceof Array).toBe(true);
    expect(path.toArray().length).toBe(0);
  });

  test("should return correct commands", () => {
    path.M(100, 100);
    expect(path.toCommands()).toEqual([["M", 100, 100]]);
    path.L(100, 100);
    expect(path.toCommands()).toEqual([
      ["M", 100, 100],
      ["L", 100, 100],
    ]);
  });

  test("should return correct commands", () => {
    path.M(100, 100);
    expect(path.toAnnotatedCommands()).toEqual([
      { fn: "M", args: { x: 100, y: 100 } },
    ]);
    path.L(100, 100);
    expect(path.toAnnotatedCommands()).toEqual([
      { fn: "M", args: { x: 100, y: 100 } },
      { fn: "L", args: { x: 100, y: 100 } },
    ]);
  });

  [
    { method: 'arc', command: 'A' },
    { method: 'cCurve', command: 'C' },
    { method: 'qCurve', command: 'Q' },
    { method: 'sCurveTo', command: 'S' },
    { method: 'tCurveTo', command: 'T' },
    { method: 'lineTo', command: 'L' },
    { method: 'moveTo', command: 'M' },
    { method: 'horizontalTo', command: 'H' },
    { method: 'verticalTo', command: 'V' },
  ].forEach(({ method, command }) => {
    test(`should create absolute version of ${method} containing ${command}`, () => {
      path[method](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });
    test(`should create relative version of ${method} containing ${command.toLowerCase()}`, () => {
      const length = path[method].length;
      const params = Array.from({ length });
      params.push(true);
      path[method].apply(null, params);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });

    test(`${command} creates ${command} data`, () => {
      path[command](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });

    test(`${command.toLowerCase()} creates ${command.toLowerCase()} data`, () => {
      path[command.toLowerCase()](0, 0);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });
  });

  test('close creates close data', () => {
    path.close();
    expect(path.toString().includes('z')).toBe(true);
  });

  test('toString is joined toArray', () => {
    path.lineTo(0, 0).Q(1, 1);
    expect(path.toString() === path.toArray().join('')).toBe(true);
  });

  test('toArray is of correct length', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toArray().length).toBe(2);
  });

  test('toString is correct', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toString()).toBe('M0 0L1 1');
  });


  test('angleInRadians', () => {
    expect(Path.angleInRadians(10)).toBe((10 * Math.PI) / 180);
  });

  test('polarToCartesian', () => {
    expect(Path.polarToCartesian(0, 0, 10, 270).x).toBe(
      0 + 10 * Math.cos(Path.angleInRadians(270)),
    );
    expect(Path.polarToCartesian(0, 0, 10, 270).y).toBe(
      0 + 10 * Math.sin(Path.angleInRadians(270)),
    );
  });

  test('clockwisePoint', () => {
    expect(Path.clockwisePoint(0, 0, 10, 270).x).toBe(
      0 + 10 * Math.cos(Path.angleInRadians(270 - 90)),
    );
    expect(Path.clockwisePoint(0, 0, 10, 270).y).toBe(
      0 + 10 * Math.sin(Path.angleInRadians(270 - 90)),
    );
  });

  test('radialPoints', () => {
    expect(Path.radialPoints(0, 0, 0, 4, 0, 1).length).toBe(4);
  });

  test('down', () => {
    expect(path.down(5).toString()).toBe('v5');
  });

  test('up', () => {
    expect(path.up(5).toString()).toBe('v-5');
  });

  test('right', () => {
    expect(path.right(5).toString()).toBe('h5');
  });

  test('left', () => {
    expect(path.left(5).toString()).toBe('h-5');
  });

  ['square', 'circle', 'triangle'].forEach((shape) => {
    test(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['square', 'circle', 'triangle'].forEach((shape) => {
    test(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  test(`roundedSquare does not end at center cx, cy when overridden`, () => {
    const s = path.roundedSquare(100, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  test(`roundedSquare ends at center cx, cy`, () => {
    const s = path.roundedSquare(100, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  test(`roundedRect does not end at center cx, cy when overridden`, () => {
    const s = path.roundedRect(100, 50, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  test(`roundedRect ends at center cx, cy`, () => {
    const s = path.roundedRect(100, 50, 20, 10, 10).toArray();
    expect(s[s.length - 1]).toBe('M10 10');
  });

  ['rect', 'ellipse', 'symX', 'symI', 'symH', 'cross', 'lens'].forEach(
    (shape) => {
      test(`${shape} ends at center cx, cy`, () => {
        const s = path[shape](100, 100, 10, 10).toArray();
        expect(s[s.length - 1]).toBe('M10 10');
      });
    },
  );

  ['rect', 'ellipse', 'symX', 'symI', 'symH', 'cross'].forEach((shape) => {
    test(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 100, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['sector', 'segment'].forEach((shape) => {
    test(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](10, 10, 50, 0, 270).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['sector', 'segment'].forEach((shape) => {
    test(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](10, 10, 50, 0, 270, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['star', 'radialLines'].forEach((shape) => {
    test(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 50, 5, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['star', 'radialLines'].forEach((shape) => {
    test(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 50, 5, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['regPolygon', 'polygram'].forEach((shape) => {
    test(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 5, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  test(`regPolygon does not end at center cx, cy when overridden`, () => {
    const s = path.regPolygon(100, 5, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  test(`polygram does not end at center cx, cy when overridden`, () => {
    const s = path.polygram(100, 5, 10, 10, null, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  test('returns valid positions', () => {
    const size = 10;
    const s = Path.positionByArray(size, [[1], [0, 1]], 0, 0);
    expect(s[0].size).toEqual(size);
    expect(s[0].cx).toEqual(size / 2);
    expect(s[0].cy).toEqual(size / 2);
  });

  test('returns valid omino', () => {
    const shape = [
      [1, 1],
      [1, 0],
      [1, 1],
    ];
    const size = 35;
    const sx = 0;
    const sy = 0;

    const s = path.omino(size, shape, sx, sy).toArray();
    expect(s[0]).toBe('M0 0');
  });

  test('toElement', () => {
    expect(path.left(5).toElement().getAttribute('d')).toBe('h-5');
    expect(path.left(5).toElement({ stroke: 10 }).getAttribute('stroke')).toBe(
      '10',
    );
  });
});
