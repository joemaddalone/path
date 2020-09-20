import Path from '../web_modules/path.js';
import dagSetup from './dagSetup.js';

const dag = dagSetup();

const square = (x, y, size, msg) => {
  const p = new Path().moveTo(x, y).right(size).down(size).left(size).close();

  const node = p.toElement({
    class: 'square-node',
  });
  node.onclick = alert.bind(null, msg);
  return node;
};

const circle = (x, y, radius, msg) => {
  const p = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0);
  const node = p.toElement({
    class: 'circle-node',
  });
  node.onclick = alert.bind(null, msg);
  return node;
};

const DagNodes = () => {
  const createConnectors = () => {
    const { edges } = dag;
    const p = new Path();
    edges.forEach(({ points, x, y }) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });
    p.stroke('#222');

    return p.toElement();
  };

  const squares = dag.nodes.slice(0, 5);
  const circles = dag.nodes.slice(5);

  const squareNodes = squares.map(({ x, y, width }, index) =>
    square(x - width / 2, y - width / 2, width, `clicked node #${index}`),
  );

  const circleNodes = circles.map(({ x, y, width }, index) =>
    circle(x, y, width / 2, `clicked node #${index}`),
  );

  return {
    connectors: createConnectors(),
    nodes: squareNodes.concat(circleNodes),
    w: dag.graph.width,
    h: dag.graph.height,
  };
};

export default DagNodes;
