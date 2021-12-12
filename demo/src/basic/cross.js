import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.cross,
  name: 'cross',
  w: 120,
  h: 120,
  paths: [
    {
      path: new Path().cross(100, 100, 60, 60).toElement(),
    },
  ],
};
