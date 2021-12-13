import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.ellipse,
  name: 'ellipse',
  w: 155,
  h: 120,
  paths: [
    {
      path: new Path().ellipse(150, 75, 80, 50),
    },
  ],
};
