import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.sector,
  name: 'sector',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().sector(60, 60, 100, 0, 270),
    },
  ],
};
