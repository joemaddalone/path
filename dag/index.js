import dagSinglePath from './dagSinglePath.js';
import dagTwoPaths from './dagTwoPaths.js';
import dagNodes from './dagNodes.js';
import { svg, g } from '../helpers/svg.js';

const makeDags = () => {
  const dags = [
    {
      fn: dagSinglePath,
      el: 'one-path',
    },
    {
      fn: dagTwoPaths,
      el: 'two-paths',
    },
    {
      fn: dagNodes,
      el: 'dag-nodes',
    },
  ];

  dags.forEach(({ el, fn }) => {
    const dag = fn();
    const s = svg(dag.w, dag.h);
    if (dag.connectors) {
      s.appendChild(dag.connectors);
    }
    if (dag.nodes) {
      if (Array.isArray(dag.nodes)) {
        const g1 = g();
        dag.nodes.forEach((node) => g1.appendChild(node));
        s.appendChild(g1);
      } else {
        s.appendChild(dag.nodes);
      }
    }
    document.getElementById(el).appendChild(s);
  });
};

export default makeDags;
