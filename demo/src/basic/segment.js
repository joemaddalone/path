import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.segment,
  name: 'segment',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().segment(60, 60, 100, 0, 270),
    },
  ],
};
