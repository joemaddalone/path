import Path from 'path';
import docs from './docs';

export default {
  ...docs.polygram,
  name: 'polygram',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().polygram(100, 7, 50, 50).toElement(),
    },
  ],
};

// size, points, cx, cy, conn = 1
