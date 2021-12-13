import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.roundedSquare,
  name: 'roundedSquare',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().roundedSquare(100, 15, 55, 60),
    },
  ],
};
