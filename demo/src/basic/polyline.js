import Path from 'path';
import { svg, g } from '../helpers/svg';
import docs from './docs';

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
