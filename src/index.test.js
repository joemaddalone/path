import Path from '.';

describe('Path', () => {
  let path;
  beforeEach(() => {
    path = new Path();
  });
  it('Path inits with an empty array', () => {
    expect(path.toArray() instanceof Array).toBe(true);
    expect(path.toArray().length).toBe(0);
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
    it(`should create absolute version of ${method} containing ${command}`, () => {
      path[method](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });
    it(`should create relative version of ${method} containing ${command.toLowerCase()}`, () => {
      const length = path[method].length;
      const params = Array.from({ length }).fill(0);
      params.push(true);
      path[method].apply(null, params);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });

    it(`${command} creates ${command} data`, () => {
      path[command](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });

    it(`${command.toLowerCase()} creates ${command.toLowerCase()} data`, () => {
      path[command.toLowerCase()](0, 0);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });
  });

  it('close creates close data', () => {
    path.close();
    expect(path.toString().includes('z')).toBe(true);
  });

  it('toString is joined toArray', () => {
    path.lineTo(0, 0).Q(1, 1);
    expect(path.toString() === path.toArray().join('')).toBe(true);
  });

  it('toArray is of correct length', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toArray().length).toBe(2);
  });

  it('toString is correct', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toString()).toBe('M0 0L1 1');
  });

  it('attributes', () => {
    path.attr('fill', 'white');
    expect(path.attributes.fill).toBe('white');
  });

  ['fill', 'stroke', 'style'].forEach((shortcut, index) => {
    it(`correctly populates attr with shortcut ${shortcut}`, () => {
      path[shortcut](index);
      expect(path.attributes[shortcut]).toBe(index);
    });
  });

  it(`correctly populates strokeWidth attr with shortcut`, () => {
    path.strokeWidth(5);
    expect(path.attributes['stroke-width']).toBe(5);
  });

  it('angleInRadians', () => {
    expect(Path.angleInRadians(10)).toBe((10 * Math.PI) / 180);
  });

  it('polarToCartesian', () => {
    expect(Path.polarToCartesian(0, 0, 10, 270).x).toBe(
      0 + 10 * Math.cos(Path.angleInRadians(270)),
    );
    expect(Path.polarToCartesian(0, 0, 10, 270).y).toBe(
      0 + 10 * Math.sin(Path.angleInRadians(270)),
    );
  });

  it('radialPoints', () => {
    expect(Path.radialPoints(0, 0, 0, 4, 0, 1).length).toBe(4);
  });

  it('down', () => {
    expect(path.down(5).toString()).toBe('v5');
  });

  it('up', () => {
    expect(path.up(5).toString()).toBe('v-5');
  });

  it('right', () => {
    expect(path.right(5).toString()).toBe('h5');
  });

  it('left', () => {
    expect(path.left(5).toString()).toBe('h-5');
  });

  ['square', 'circle', 'triangle'].forEach((shape) => {
    it(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['square', 'circle', 'triangle'].forEach((shape) => {
    it(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  it(`roundedSquare does not end at center cx, cy when overridden`, () => {
    const s = path.roundedSquare(100, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  it(`roundedSquare ends at center cx, cy`, () => {
    const s = path.roundedSquare(100, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  it(`roundedRect does not end at center cx, cy when overridden`, () => {
    const s = path.roundedRect(100, 50, 20, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  it(`roundedRect ends at center cx, cy`, () => {
    const s = path.roundedRect(100, 50, 20, 10, 10).toArray();
    expect(s[s.length - 1]).toBe('M10 10');
  });

  ['rect', 'ellipse', 'symX', 'symI', 'symH', 'cross'].forEach((shape) => {
    it(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 100, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['rect', 'ellipse', 'symX', 'symI', 'symH', 'cross'].forEach((shape) => {
    it(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 100, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['sector', 'segment'].forEach((shape) => {
    it(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](10, 10, 50, 0, 270).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['sector', 'segment'].forEach((shape) => {
    it(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](10, 10, 50, 0, 270, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['star', 'radialLines'].forEach((shape) => {
    it(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 50, 5, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  ['star', 'radialLines'].forEach((shape) => {
    it(`${shape} does not end at center cx, cy when overridden`, () => {
      const s = path[shape](100, 50, 5, 10, 10, false).toArray();
      expect(s[s.length - 1]).not.toBe('M10 10');
    });
  });

  ['regPolygon', 'polygram'].forEach((shape) => {
    it(`${shape} ends at center cx, cy`, () => {
      const s = path[shape](100, 5, 10, 10).toArray();
      expect(s[s.length - 1]).toBe('M10 10');
    });
  });

  it(`regPolygon does not end at center cx, cy when overridden`, () => {
    const s = path.regPolygon(100, 5, 10, 10, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  it(`polygram does not end at center cx, cy when overridden`, () => {
    const s = path.polygram(100, 5, 10, 10, null, false).toArray();
    expect(s[s.length - 1]).not.toBe('M10 10');
  });

  it('toElement', () => {
    expect(path.left(5).toElement().getAttribute('d')).toBe('h-5');
    expect(path.left(5).toElement({ stroke: 10 }).getAttribute('stroke')).toBe(
      '10',
    );
  });
});
