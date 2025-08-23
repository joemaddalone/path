import Path from '@joemaddalone/path';
import dagSetup from './dagSetup';

const dag = dagSetup();

const dagSinglePath = () => {
  const { edges, nodes } = dag;
  const p = new Path();
  edges.forEach(({ points, x, y }) => {
    const m = points.shift();
    p.M(m.x, m.y);
    points.forEach((point) => p.L(point.x, point.y));
  });
  nodes.forEach(({ width, height, x, y }) => {
    p.M(x - width / 2, y - height / 2)
      .right(width)
      .down(height)
      .left(width)
      .up(height);
  });

  return {
    nodes: p.toElement({ stroke: '#222' }),
    w: dag.graph.width,
    h: dag.graph.height,
  };
};

export default dagSinglePath;
