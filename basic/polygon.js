import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

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
      path: new Path().polygon(points).toElement(),
    },
  ],
};
