import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.square,
  name: 'square',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().square(100, 50, 60),
    },
  ],
};
