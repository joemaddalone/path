import Path from 'path';
import docs from './docs';

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120],
];

export default {
  ...docs.star,
  name: 'star',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().star(120, 5, 70, 60).toElement(),
    },
    {
      path: new Path().star(15, 5, 70, 60).toElement({ class: 'filled' }),
    },
  ],
};
