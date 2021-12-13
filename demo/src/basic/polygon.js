import Path from '@joemaddalone/path';
import docs from './docs';

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120],
];

export default {
  ...docs.polygon,
  name: 'polygon',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().polygon(points),
    },
  ],
};
