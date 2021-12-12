import Path from '../web_modules/@joemaddalone/path.js';
import dagSetup from './dagSetup.js';

const dag = dagSetup();

const dagTwoPaths = () => {
  const createNodes = (nodes) => {
    const p = new Path();
    nodes.forEach(({ width, height, x, y }) => {
      p.M(x - width / 2, y - height / 2)
        .right(width)
        .down(height)
        .left(width)
        .up(height);
    });

    p.stroke('red');

    return p.toElement();
  };

  const createConnectors = (edges) => {
    const p = new Path();
    edges.forEach(({ points, x, y }) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });

    p.stroke('#222');

    return p.toElement();
  };

  return {
    nodes: createNodes(dag.nodes),
    connectors: createConnectors(dag.edges),
    w: dag.graph.width,
    h: dag.graph.height,
  };
};

export default dagTwoPaths;
