import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.star,
  name: 'star',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().star(120, 40, 5, 70, 60),
    },
  ],
};
