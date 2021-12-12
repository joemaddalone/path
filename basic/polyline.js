import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

const pointsAbsolute = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120],
];

export default {
  ...docs.polyline,
  name: 'polyline',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().polyline(pointsAbsolute).toElement(),
    },
  ],
};
