(() => {
  // src/api.js
  var pathCommands = {
    primitives: [
      {cmd: "A", args: "rx,ry,rotation,arc,sweep,ex,ey", description: "Absolute A"},
      {cmd: "a", args: "rx, ry,rotation,arc,sweep,ex,ey", description: "Relative A"},
      {cmd: "C", args: "cx1,cy1,cx2,cy2,ex,ey", description: "Absolute C"},
      {cmd: "c", args: "cx1,cy1,cx2,cy2,ex,ey", description: "Relative C"},
      {cmd: "H", args: "x", description: "Absolute H"},
      {cmd: "h", args: "x", description: "Relative H"},
      {cmd: "L", args: "x,y", description: "Absolute L"},
      {cmd: "l", args: "x,y", description: "Relative L"},
      {cmd: "M", args: "x,y", description: "Absolute M"},
      {cmd: "m", args: "x,y", description: "Relative M"},
      {cmd: "Q", args: "cx,cy,ex,ey", description: "Absolute Q"},
      {cmd: "q", args: "cx,cy,ex,ey", description: "Relative Q"},
      {cmd: "S", args: "cx,cy,ex,ey", description: "Absolute S"},
      {cmd: "s", args: "cx,cy,ex,ey", description: "Relative S"},
      {cmd: "T", args: "ex,ey", description: "Absolute T"},
      {cmd: "t", args: "ex,ey", description: "Relative T"},
      {cmd: "V", args: "y", description: "Absolute V"},
      {cmd: "v", args: "y", description: "Relative V"}
    ],
    friendly: [
      {
        cmd: "arc",
        args: "rx,ry,rotation,arc,sweep,ex,ey,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to a"
      },
      {
        cmd: "cCurve",
        args: "cx,cy,ex,ey,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to c"
      },
      {
        cmd: "horizontalTo",
        args: "x,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to h"
      },
      {
        cmd: "verticalTo",
        args: "x,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to v"
      },
      {
        cmd: "lineTo",
        args: "x,y,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to l"
      },
      {
        cmd: "moveTo",
        args: "x,y,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to m"
      },
      {
        cmd: "qCurve",
        args: "cx,cy,ex,ey,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to q"
      },
      {
        cmd: "sCurveTo",
        args: "cx,cy,ex,ey,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to s"
      },
      {
        cmd: "tCurveTo",
        args: "cx,cy,ex,ey,relative = false",
        description: "relative is optional, its default is false. Setting relative to true is equivalent to t"
      }
    ],
    helpers: [
      {
        cmd: "down",
        args: "px",
        description: "Draw line from current position down by px"
      },
      {
        cmd: "up",
        args: "px",
        description: "Draw line from current position up by px"
      },
      {
        cmd: "right",
        args: "px",
        description: "Draw line from current position right by px"
      },
      {
        cmd: "left",
        args: "px",
        description: "Draw line from current position left by px"
      },
      {
        cmd: "close",
        description: 'Produces a "Z" command which draws a stright line back to the first point of the path.'
      }
    ],
    shapes: [
      {
        cmd: ".circle",
        args: "size, cx, cy",
        description: ".circle is drawn from center points (cx & cy). The cursor is then moved to the center point"
      },
      {
        cmd: ".ellipse",
        args: "width, height, cx, cy",
        description: ".ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point."
      },
      {
        cmd: ".polygon",
        args: "[points]",
        description: ".polygon accepts an array of [x, y] coordinates and then draws lines connecting those points. The path will start from the first point and end on the first point - closing the shape."
      },
      {
        cmd: ".polygram",
        args: "size, points, cx, cy, vertexSkip = 2",
        description: ".polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point. Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon."
      },
      {
        cmd: ".polyline",
        args: "[points], relative = false",
        description: ".polyline accepts an array of [x, y] coordinates and then draws lines connecting those points. The path will start from the first point and end on the last. points can be absolute or relative."
      },
      {
        cmd: ".radialLines",
        args: "outerSize, innerSize, points, cx, cy",
        description: ".radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point."
      },
      {
        cmd: ".rect",
        args: "width, height, cx, cy",
        description: ".rect is drawn from center point (cx & cy). The cursor is then moved to the center point."
      },
      {
        cmd: ".regPolygon",
        args: "size, sides, cx, cy",
        description: ".regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point."
      },
      {
        cmd: ".sector",
        args: "cx, cy, size, startAngle, endAngle",
        description: ".sector is drawn from center point (cx & cy). The cursor is then moved to the center point."
      },
      {
        cmd: ".segment",
        args: "cx, cy, size, startAngle, endAngle",
        description: ".segment is drawn from center point (cx & cy). The cursor is then moved to the center point."
      },
      {
        cmd: ".square",
        args: "size, cx, cy",
        description: ".square is drawn from center point (cx & cy). The cursor is then moved to the center point."
      },
      {
        cmd: ".star",
        args: "outerSize, innerSize, points, cx, cy",
        description: ".star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point."
      },
      {
        cmd: ".triangle",
        args: "size, cx, cy",
        description: ".triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point."
      }
    ]
  };
  var primitives = document.querySelector(".primitive");
  var friendly = document.querySelector(".friendly");
  var helpers = document.querySelector(".helpers");
  pathCommands.primitives.forEach((cmd) => {
    const ex = document.createElement("div");
    ex.className = "example";
    ex.innerHTML = `<h4>Path.${cmd.cmd}</h4><p>${cmd.description}</p><pre><code class="language-html">.${cmd.cmd}(${cmd.args})</code></pre><hr />`;
    primitives.appendChild(ex);
  });
  pathCommands.friendly.forEach((cmd) => {
    const ex = document.createElement("div");
    ex.className = "example";
    ex.innerHTML = `<h4>Path.${cmd.cmd}</h4><p>${cmd.description}</p><pre><code class="language-html">.${cmd.cmd}(${cmd.args})</code></pre><hr />`;
    friendly.appendChild(ex);
  });
  pathCommands.helpers.forEach((cmd) => {
    const ex = document.createElement("div");
    ex.className = "example";
    ex.innerHTML = `<h4>Path.${cmd.cmd}</h4><p>${cmd.description}</p><pre><code class="language-html">.${cmd.cmd}(${cmd?.args || ""})</code></pre><hr />`;
    helpers.appendChild(ex);
  });
})();
