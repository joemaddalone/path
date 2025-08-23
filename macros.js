(() => {
  // src/helpers/svg.js
  var svg = (width, height) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    el.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return el;
  };

  // src/basic/docs.js
  var docs_default = {
    circle: {
      method: "circle",
      args: ["size, cx, cy"],
      description: ".circle is drawn from center points (cx & cy). The cursor is then moved to the center points.",
      demo: {
        w: 140,
        h: 120,
        args: [[95, 50, 50]]
      }
    },
    cross: {
      method: "cross",
      args: ["width, height, cx, cy"],
      description: ".cross draws a cross shape.",
      demo: {
        w: 120,
        h: 120,
        args: [[100, 100, 60, 60]]
      }
    },
    ellipse: {
      method: "ellipse",
      args: ["width, height, cx, cy"],
      description: ".ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 155,
        h: 120,
        args: [[150, 75, 80, 50]]
      }
    },
    isocube: {
      method: "isocube",
      args: ["size", "cx", "cy"],
      description: ".isocube draws a isometric cube.",
      demo: {
        w: 200,
        h: 200,
        args: [[100, 100, 100]]
      }
    },
    kite: {
      method: "kite",
      args: ["width, height, dh, cx, cy"],
      description: ".kite is drawn from center point (cx & cy). dh = position of the left & right points from the top of the shape. The cursor is then moved to the center point.",
      demo: {
        w: 155,
        h: 120,
        args: [[70, 100, 25, 80, 50]]
      }
    },
    lens: {
      method: "lens",
      args: ["width, height, cx, cy"],
      description: ".lens is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 155,
        h: 120,
        args: [[150, 75, 80, 50]]
      }
    },
    omino: {
      method: "omino",
      args: ["size, [shape], sx, sy, lined = false"],
      description: ".omino is drawn based on the positive values positioned in an 2d array.  Think Tetris pieces.",
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
              [0, 1, 1]
            ],
            100,
            0
          ],
          [
            15,
            [
              [1, 1],
              [0, 1, 1]
            ],
            150,
            0,
            true
          ]
        ]
      }
    },
    polygon: {
      method: "polygon",
      args: ["[points]"],
      description: ".polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.",
      demo: {
        w: 140,
        h: 120,
        args: [
          [
            [
              [10, 60],
              [40, 0],
              [70, 60],
              [40, 120]
            ]
          ]
        ]
      }
    },
    polygram: {
      method: "polygram",
      args: ["size, points, cx, cy, vertexSkip = 2"],
      description: ".polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.",
      demo: {
        w: 140,
        h: 120,
        args: [[100, 7, 50, 50]]
      }
    },
    polyline: {
      method: "polyline",
      args: ["[points], relative = false"],
      description: ".polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.",
      demo: {
        w: 140,
        h: 120,
        args: [
          [
            [
              [10, 60],
              [40, 0],
              [70, 60],
              [40, 120]
            ]
          ]
        ]
      }
    },
    radialLines: {
      method: "radialLines",
      args: ["outerSize, innerSize, points, cx, cy"],
      description: ".radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[60, 120, 8, 70, 60]]
      }
    },
    rect: {
      method: "rect",
      args: ["width, height, cx, cy"],
      description: ".rect is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[120, 60, 60, 60]]
      }
    },
    regPolygon: {
      method: "regPolygon",
      args: ["size, sides, cx, cy"],
      description: ".regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[100, 6, 50, 50]]
      }
    },
    roundedRect: {
      method: "roundedRect",
      args: ["width, height, radius, cx, cy"],
      description: ".roundedRect is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[120, 60, 20, 62, 62]]
      }
    },
    roundedSquare: {
      method: "roundedSquare",
      args: ["size, radius, cx, cy"],
      description: ".roundedSquare is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[100, 15, 55, 60]]
      }
    },
    sector: {
      method: "sector",
      args: ["cx, cy, size, startAngle, endAngle"],
      description: ".sector is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[60, 60, 100, 0, 270]]
      }
    },
    segment: {
      method: "segment",
      args: ["cx, cy, size, startAngle, endAngle"],
      description: ".segment is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[60, 60, 100, 0, 270]]
      }
    },
    square: {
      method: "square",
      args: ["size, cx, cy"],
      description: ".square is drawn from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[100, 50, 60]]
      }
    },
    star: {
      method: "star",
      args: ["outerSize, innerSize, points, cx, cy"],
      description: ".star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[120, 40, 5, 70, 60]]
      }
    },
    symH: {
      method: "symH",
      args: ["width, height, cx, cy"],
      description: ".symH draws an H shape.",
      demo: {
        w: 200,
        h: 120,
        args: [[150, 100, 100, 60]]
      }
    },
    symI: {
      method: "symI",
      args: ["width, height, cx, cy"],
      description: ".symI draws an I shape.",
      demo: {
        w: 120,
        h: 120,
        args: [[100, 100, 60, 60]]
      }
    },
    symV: {
      method: "symV",
      args: ["width, height, cx, cy"],
      description: ".symV draws a V shape.",
      demo: {
        w: 120,
        h: 120,
        args: [[100, 100, 60, 60]]
      }
    },
    symX: {
      method: "symX",
      args: ["width, height, cx, cy"],
      description: ".symX draws an X shape.",
      demo: {
        w: 120,
        h: 120,
        args: [[100, 100, 60, 60]]
      }
    },
    triangle: {
      method: "triangle",
      args: ["size, cx, cy"],
      description: ".triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.",
      demo: {
        w: 140,
        h: 120,
        args: [[95, 50, 60]]
      }
    }
  };

  // ../dist/esm/index.js
  var I = Object.defineProperty;
  var w = (b, r, t) => r in b ? I(b, r, {enumerable: true, configurable: true, writable: true, value: t}) : b[r] = t;
  var u = (b, r, t) => w(b, typeof r != "symbol" ? r + "" : r, t);
  var C = {A: {args: ["rx", "ry", "rotation", "arc", "sweep", "ex", "ey"]}, a: {args: ["rx", "ry", "rotation", "arc", "sweep", "ex", "ey"]}, C: {args: ["cx1", "cy1", "cx2", "cy2", "ex", "ey"]}, c: {args: ["cx1", "cy1", "cx2", "cy2", "ex", "ey"]}, H: {args: ["x"]}, h: {args: ["x"]}, L: {args: ["x", "y"]}, l: {args: ["x", "y"]}, M: {args: ["x", "y"]}, m: {args: ["x", "y"]}, Q: {args: ["cx", "cy", "ex", "ey"]}, q: {args: ["cx", "cy", "ex", "ey"]}, S: {args: ["cx", "cy", "ex", "ey"]}, s: {args: ["cx", "cy", "ex", "ey"]}, T: {args: ["ex", "ey"]}, t: {args: ["ex", "ey"]}, V: {args: ["y"]}, v: {args: ["y"]}, z: {args: []}};
  var A = (b) => b * Math.PI / 180;
  var T = (b, r, t, n) => {
    let e = A(n);
    return {x: b + t * Math.cos(e), y: r + t * Math.sin(e)};
  };
  var S = (b, r, t, n) => {
    let e = n - 90;
    return T(b, r, t, e);
  };
  var D = (b, r, t, n, e = -0.5 * Math.PI, s = 1) => {
    b = b || 1e-10;
    let a = 2 * Math.PI * s / n, m = Array.from(Array(n >= 0 ? n : 0).keys()), o = Math.max(0, 4 - Math.floor(Math.log10(b)));
    return m.map((i, l) => {
      let c = l * a + e;
      return [parseFloat((r + b * Math.cos(c)).toFixed(o)), parseFloat((t + b * Math.sin(c)).toFixed(o))];
    });
  };
  var k = (b, r, t, n) => {
    let e = [], s = b / 2;
    return r.forEach((a, m) => {
      a.forEach((o, i) => {
        o && e.push({size: b, cx: i * b + s + t, cy: m * b + s + n, ri: m, ci: i, value: o});
      });
    }), e;
  };
  var h = class h2 {
    constructor() {
      u(this, "pathData");
      u(this, "m", (r, t) => this.moveTo(r, t, true));
      u(this, "M", (r, t) => this.moveTo(r, t));
      u(this, "l", (r, t) => this.lineTo(r, t, true));
      u(this, "L", (r, t) => this.lineTo(r, t));
      u(this, "H", (r) => this.horizontalTo(r));
      u(this, "h", (r) => this.horizontalTo(r, true));
      u(this, "V", (r) => this.verticalTo(r));
      u(this, "v", (r) => this.verticalTo(r, true));
      u(this, "Q", (r, t, n, e) => this.qCurve(r, t, n, e));
      u(this, "q", (r, t, n, e) => this.qCurve(r, t, n, e, true));
      u(this, "T", (r, t) => this.tCurveTo(r, t));
      u(this, "t", (r, t) => this.tCurveTo(r, t, true));
      u(this, "C", (r, t, n, e, s, a) => this.cCurve(r, t, n, e, s, a));
      u(this, "c", (r, t, n, e, s, a) => this.cCurve(r, t, n, e, s, a, true));
      u(this, "S", (r, t, n, e) => this.sCurveTo(r, t, n, e));
      u(this, "s", (r, t, n, e) => this.sCurveTo(r, t, n, e, true));
      u(this, "A", (r, t, n, e, s, a, m) => this.arc(r, t, n, e, s, a, m));
      u(this, "a", (r, t, n, e, s, a, m) => this.arc(r, t, n, e, s, a, m, true));
      u(this, "Z", () => this.close());
      u(this, "z", () => this.close());
      u(this, "moveTo", (r, t, n = false) => (this.pathData.push(`${n ? "m" : "M"}${r} ${t}`), this));
      u(this, "lineTo", (r, t, n = false) => (this.pathData.push(`${n ? "l" : "L"}${r} ${t}`), this));
      u(this, "horizontalTo", (r, t = false) => (this.pathData.push(`${t ? "h" : "H"}${r}`), this));
      u(this, "verticalTo", (r, t = false) => (this.pathData.push(`${t ? "v" : "V"}${r}`), this));
      u(this, "qCurve", (r, t, n, e, s = false) => (this.pathData.push(`${s ? "q" : "Q"}${r} ${t} ${n} ${e}`), this));
      u(this, "tCurveTo", (r, t, n = false) => (this.pathData.push(`${n ? "t" : "T"}${r} ${t}`), this));
      u(this, "cCurve", (r, t, n, e, s, a, m = false) => (this.pathData.push(`${m ? "c" : "C"}${r} ${t} ${n} ${e} ${s} ${a}`), this));
      u(this, "sCurveTo", (r, t, n, e, s = false) => (this.pathData.push(`${s ? "s" : "S"}${r} ${t} ${n} ${e}`), this));
      u(this, "arc", (r, t, n, e, s, a, m, o = false) => (this.pathData.push(`${o ? "a" : "A"}${r} ${t} ${n} ${e} ${s} ${a} ${m}`), this));
      u(this, "close", () => (this.pathData.push("z"), this));
      u(this, "down", (r) => this.v(r));
      u(this, "up", (r) => this.v(r * -1));
      u(this, "right", (r) => this.h(r));
      u(this, "left", (r) => this.h(r * -1));
      u(this, "toArray", () => this.pathData);
      u(this, "toString", () => this.pathData.join(""));
      u(this, "toCommands", () => this.pathData.map((r) => {
        let t = [r.substr(0, 1)], n = r.substr(1);
        return n.length && t.push(...n.split(" ").map(Number)), t;
      }));
      u(this, "toAnnotatedCommands", () => this.toCommands().map((n) => {
        let e = String(n.shift()), s = C[e]?.args;
        return s.length ? {fn: e, args: s.reduce((a, m, o) => (a[m] = n[o], a), {})} : {fn: e};
      }));
      u(this, "toElement", (r = {}) => {
        let t = {...r}, n = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return Object.keys(t).forEach((e) => {
          n.setAttribute(e, String(t[e]));
        }), n.setAttribute("d", this.toString()), n;
      });
      u(this, "circle", (r, t, n, e = true) => this.ellipse(r, r, t, n, e));
      u(this, "ellipse", (r, t, n, e, s = true) => {
        let a = r / 2, m = t / 2;
        return this.M(n + a, e).A(a, m, 0, 0, 1, n - a, e).A(a, m, 0, 0, 1, n + a, e).close(), s && this.M(n, e), this;
      });
      u(this, "kite", (r, t, n, e, s, a = true) => {
        n = n || Math.round(t * 0.33);
        let [m, o, i] = h2.radialPoints(t / 2, e, s, 4), l = Number(m[1]) + n, c = [[Number(m[0]), Number(m[1])], [e - r / 2, l], [Number(i[0]), Number(i[1])], [e + r / 2, l]];
        return this.polyline(c).close(), a && this.M(e, s), this;
      });
      u(this, "polygon", (r) => (this.polyline(r).close(), this));
      u(this, "polygram", (r, t, n, e, s = 2, a = true) => (this.polygon(h2.radialPoints(r / 2, n, e, t, void 0, s)), a && this.M(n, e), this));
      u(this, "polyline", (r, t = false) => {
        let n = [...r], e = n.shift(), s = t ? this.m : this.M, a = t ? this.l : this.L;
        return s.apply(null, e), n.forEach((m) => {
          a.apply(null, m);
        }), this;
      });
      u(this, "rect", (r, t, n, e, s = true) => (this.M(n - r / 2, e - t / 2).right(r).down(t).left(r).up(t), s && this.M(n, e), this));
      u(this, "regPolygon", (r, t, n, e, s = true) => (this.polygon(h2.radialPoints(r / 2, n, e, t)), s && this.M(n, e), this));
      u(this, "roundedRect", (r, t, n, e, s, a = true) => {
        let m = s - t / 2, o = e - r / 2, i = o + r, l = m + t, c = Math.min(n, r / 2);
        c = c < 0 ? 0 : c;
        let p = Math.min(n, t / 2);
        p = p < 0 ? 0 : p;
        let f = Math.max(r - c * 2, 0), M = Math.max(t - p * 2, 0);
        return this.M(o + c, m).right(f).A(c, p, 0, 0, 1, i, m + p).down(M).A(c, p, 0, 0, 1, i - c, l).left(f).A(c, p, 0, 0, 1, o, l - p).up(M).A(c, p, 0, 0, 1, o + c, m).M(o, m), a && this.M(e, s), this;
      });
      u(this, "roundedSquare", (r, t, n, e, s = true) => this.roundedRect(r, r, t, n, e, s));
      u(this, "square", (r, t, n, e = true) => this.rect(r, r, t, n, e));
      u(this, "star", (r, t, n, e, s, a = true) => {
        let m = t / 2, o = r / 2, i = 360 / (n * 2), c = Array.from({length: n * 2}).map((p, f) => {
          let M = f % 2 == 0 ? o : m, g2 = i * f, {x: y, y: $} = h2.clockwisePoint(e, s, M, g2);
          return [y, $];
        });
        return this.polygon(c), a && this.M(e, s), this;
      });
      u(this, "triangle", (r, t, n, e = true) => {
        let s = Math.sqrt(3), a = [t, n - s / 3 * r], m = [t - r / 2, n + s / 6 * r], o = [t + r / 2, n + s / 6 * r];
        return this.polygon([a, m, o]), e && this.M(t, n), this;
      });
      u(this, "sector", (r, t, n, e, s, a = true) => {
        let m = n / 2, o = h2.clockwisePoint(r, t, m, s), i = h2.clockwisePoint(r, t, m, e), l = s - e <= 180 ? 0 : 1;
        return this.M(o.x, o.y).A(m, m, 0, l, 0, i.x, i.y).L(r, t).L(o.x, o.y), a && this.M(r, t), this;
      });
      u(this, "segment", (r, t, n, e, s, a = true) => {
        let m = n / 2, o = h2.clockwisePoint(r, t, m, s), i = h2.clockwisePoint(r, t, m, e), l = s - e <= 180 ? 0 : 1;
        return this.M(o.x, o.y).A(m, m, 0, l, 0, i.x, i.y), a && this.M(r, t), this;
      });
      u(this, "radialLines", (r, t, n, e, s, a = true) => {
        let m = h2.radialPoints(t / 2, e, s, n), o = h2.radialPoints(r / 2, e, s, n);
        return m.forEach((i, l) => {
          this.M(i[0], i[1]).L(o[l][0], o[l][1]);
        }), a && this.M(e, s), this;
      });
      u(this, "lens", (r, t, n, e, s = true) => (this.M(n - r / 2, e).Q(n, e - t, n + r / 2, e).Q(n, e + t, n - r / 2, e), s && this.M(n, e), this));
      u(this, "omino", (r, t, n, e, s = false) => (h2.positionByArray(r, t, n, e).forEach((m, o, i) => {
        let {cx: l, cy: c, ri: p, ci: f, size: M} = m, g2 = M / 2, y = i.find((P) => P.ri === p && P.ci === f - 1), $ = i.find((P) => P.ri === p && P.ci === f + 1), x = i.find((P) => P.ri === p - 1 && P.ci === f), N = i.find((P) => P.ri === p + 1 && P.ci === f), v = l - g2, R = l + g2, d = c - g2, q = c + g2;
        (!y || s) && (this.M(v, d), this.v(M)), $ || (this.M(R, d), this.v(M)), (!x || s) && (this.M(v, d), this.h(M)), N || (this.M(v, q), this.h(M));
      }), this));
      u(this, "isocube", (r, t, n, e = true) => {
        this.regPolygon(r, 6, t, n, e);
        let s = h2.radialPoints(0 / 2, t, n, 6), a = h2.radialPoints(r / 2, t, n, 6);
        return [1, 3, 5].forEach((o) => {
          this.M(Number(s[o][0]), Number(s[o][1])).L(Number(a[o][0]), Number(a[o][1]));
        }), e && this.M(t, n), this;
      });
      u(this, "cross", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, e).L(m, e).M(n, i).L(n, o), s && this.M(n, e), this;
      });
      u(this, "symH", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(a, i).M(a, e).L(m, e).M(m, o).L(m, i), s && this.M(n, e), this;
      });
      u(this, "symI", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(m, o).M(n, o).L(n, i).M(a, i).L(m, i), s && this.M(n, e), this;
      });
      u(this, "symV", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(n, i).L(m, o), s && this.M(n, e), this;
      });
      u(this, "symX", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(m, i).M(a, i).L(m, o), s && this.M(n, e), this;
      });
      return this.pathData = [], this;
    }
  };
  u(h, "angleInRadians", A), u(h, "polarToCartesian", T), u(h, "clockwisePoint", S), u(h, "radialPoints", D), u(h, "positionByArray", k), u(h, "macro", (r, t) => (h.prototype[r] = t, t));
  var L = h;

  // src/basic/index.js
  var parseArgs = (args) => {
    return args.map((ar) => {
      if (ar instanceof Array) {
        return `[${parseArgs(ar)}]`;
      }
      return ar;
    }).join(", ");
  };
  var makeBasicShapes = (target) => {
    Object.keys(docs_default).forEach((k2) => {
      const shape = docs_default[k2];
      const demo = shape.demo;
      const span = document.createElement("span");
      const s = svg(demo.w, demo.h);
      demo.args.forEach((a) => {
        const p = new L();
        s.appendChild(p[shape.method].apply(p, [...a]).toElement());
      });
      const title = document.createElement("h3");
      title.className = "ui-header";
      title.innerHTML = `<span class="func">.${shape.method}</span>(<i class="args">${shape.args}</i>)`;
      const description = document.createElement("p");
      description.innerText = shape.description;
      const source = document.createElement("pre");
      source.className = "language-js";
      const code = document.createElement("code");
      const builders = [];
      demo.args.forEach((a, i, arr) => {
        const innerArgs = parseArgs(a);
        const n = arr.length > 1 ? `${shape.method}_${i}` : shape.method;
        builders.push(`const ${n} = new Path().${shape.method}(${innerArgs});`);
        builders.push(`svg.appendChild(${n}.toElement());`);
      });
      code.innerHTML = builders.join("\n");
      span.appendChild(title);
      span.appendChild(description);
      span.appendChild(s);
      span.appendChild(source);
      source.appendChild(code);
      target.appendChild(span);
    });
  };
  var basic_default = makeBasicShapes;

  // src/macros/customMacro.js
  L.macro("squareTest", function(size, x, y) {
    if (x && y) {
      this.M(x, y);
    }
    this.right(size).down(size).left(size).up(size);
    return this;
  });
  L.macro("circleTest", function(radius, x, y) {
    if (x && y) {
      this.M(x, y);
    }
    this.m(-radius, 0).a(radius, radius, 0, 1, 0, -(radius * 2), 0).a(radius, radius, 0, 1, 0, radius * 2, 0);
    return this;
  });
  L.macro("triangleTest", function(w2, h3, x, y) {
    this.M(x, y).l(-w2 / 2, h3).right(w2).L(x, y);
    return this;
  });
  var customMacros = () => {
    const p = new L();
    p.squareTest(30, 25, 25).squareTest(50, 60, 15).circleTest(15, 160, 40).circleTest(25, 225, 40).triangleTest(25, 25, 220, 30).triangleTest(65, 50, 265, 15);
    return p.toElement({stroke: "#222"});
  };
  var customMacro_default = customMacros;

  // src/complex/donut.js
  var donut = ({size, width, cx, cy, data}) => {
    const percentToDegree = (p) => p / 100 * 360;
    const segments = [];
    let total = 0;
    data.forEach((d, i) => {
      const startAngle = percentToDegree(total);
      const endAngle = percentToDegree(total + d.percent);
      const p = new L();
      p.segment(cx, cy, size - width, startAngle, endAngle);
      segments.push(p.toElement({
        "stroke-width": width,
        stroke: d.color,
        fill: "none"
      }));
      total = total + d.percent;
    });
    return segments;
  };
  var donut_default = donut;

  // src/complex/pie.js
  var pie = ({size, cx, cy, data}) => {
    const percentToDegree = (p) => p / 100 * 360;
    const sectors = [];
    let total = 0;
    data.forEach((d, i) => {
      const startAngle = percentToDegree(total);
      const endAngle = percentToDegree(total + d.percent);
      const p = new L();
      p.sector(cx, cy, size, startAngle, endAngle);
      sectors.push(p.toElement({fill: d.color}));
      total = total + d.percent;
    });
    return sectors;
  };
  var pie_default = pie;

  // src/complex/grid.js
  var grid = ({x, y, width, height, cols, rows, close = true}) => {
    const lines = new L().M(x, y);
    const extra = close ? 1 : 0;
    const colWidth = width / cols;
    const rowHeight = height / rows;
    Array.from({length: cols + extra}).map((_, index) => lines.M(x + index * colWidth, y).down(height));
    Array.from({length: rows + extra}).map((_, index) => lines.M(x, y + index * rowHeight, y).right(width));
    return lines.toElement({stroke: "#ddd"});
  };
  var grid_default = grid;

  // src/complex/sparkline.js
  var sparkline = ({width, height, data}) => {
    const line = new L();
    const zero = height / 2;
    const pointDistance = parseInt(width / data.length);
    const points = data.map((d, index) => {
      if (index !== 0) {
        const prev = data[index - 1];
        return [pointDistance, prev - d];
      } else {
        return [pointDistance, d];
      }
    });
    points.unshift([0, zero + data.reduce((a, b) => a + b) / 2 - 10]);
    return line.polyline(points, true).toElement({stroke: "red", fill: "none"});
  };
  var sparkline_default = sparkline;

  // src/macros.js
  var pieData = [
    {
      color: "#086972",
      percent: 20,
      nested: [
        {color: "rgba(0,100,25,0.9)", percent: 10},
        {color: "rgba(0,100,25,0.8)", percent: 10}
      ]
    },
    {
      color: "#01a9b4",
      percent: 30,
      nested: [
        {color: "rgba(0,100,25,0.7)", percent: 10},
        {color: "rgba(0,100,25,0.6)", percent: 10},
        {color: "rgba(0,100,25,0.5)", percent: 10}
      ]
    },
    {
      color: "#87dfd6",
      percent: 50,
      nested: [
        {color: "rgba(0,100,25,0.4)", percent: 25},
        {color: "rgba(0,100,25,0.3)", percent: 25}
      ]
    }
  ];
  basic_default(document.getElementById("basic-shapes"));
  var d4 = customMacro_default();
  var s4 = svg(760, 80);
  s4.appendChild(d4);
  document.getElementById("custom-macros").appendChild(s4);
  var piePaths = pie_default({
    size: 150,
    cx: 80,
    cy: 80,
    data: pieData
  });
  var s5 = svg(250, 160);
  piePaths.forEach((pp) => s5.appendChild(pp));
  document.getElementById("pie").appendChild(s5);
  var donutPaths = donut_default({
    width: 25,
    size: 150,
    cx: 80,
    cy: 80,
    data: pieData
  });
  var s6 = svg(250, 160);
  donutPaths.forEach((dp) => s6.appendChild(dp));
  document.getElementById("donut").appendChild(s6);
  var donutPaths2 = donut_default({
    width: 20,
    size: 175,
    cx: 90,
    cy: 90,
    data: pieData.map((pd) => pd.nested).flat()
  });
  var piePaths2 = pie_default({
    size: 130,
    cx: 90,
    cy: 90,
    data: pieData
  });
  var s7 = svg(180, 180);
  donutPaths2.forEach((dp) => s7.appendChild(dp));
  piePaths2.forEach((pp) => s7.appendChild(pp));
  document.getElementById("combined").appendChild(s7);
  var gridLines = grid_default({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    rows: 10,
    cols: 20
  });
  var s8 = svg(301, 151);
  s8.appendChild(gridLines);
  document.getElementById("grid").appendChild(s8);
  var gridLines2 = grid_default({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    rows: 10,
    cols: 20
  });
  var spark = sparkline_default({
    width: 300,
    height: 150,
    data: [-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]
  });
  var s9 = svg(301, 151);
  s9.appendChild(gridLines2);
  s9.appendChild(spark);
  document.getElementById("spark").appendChild(s9);
})();
