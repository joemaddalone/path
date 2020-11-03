import Path from 'path';
import docs from './docs';

export default {
  ...docs.star,
  name: 'star',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().star(120, 40, 5, 70, 60).toElement(),
    },
    {
      path: new Path().star(15, 5, 5, 70, 60).toElement({ class: 'filled' }),
    },
  ],
};
