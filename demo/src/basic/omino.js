import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.omino,
  name: 'omino',
  w: 400,
  h: 90,
  paths: [
    {
      path: new Path().omino(15, [[1], [1], [1, 1]], 10, 0),
    },
    {
      path: new Path().omino(15, [[1], [1], [1, 1]], 60, 0, true),
    },
    {
      path: new Path().omino(15, [[1, 1, 1, 1]], 10, 60),
    },
    {
      path: new Path().omino(15, [[1, 1, 1, 1]], 90, 60, true),
    },
    {
      path: new Path().omino(
        15,
        [
          [1, 1],
          [0, 1, 1],
        ],
        100,
        0,
      ),
    },
    {
      path: new Path().omino(
        15,
        [
          [1, 1],
          [0, 1, 1],
        ],
        150,
        0,
        true,
      ),
    },
  ],
};
