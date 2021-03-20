import Path from 'path';
import docs from './docs';

export default {
  ...docs.square,
  name: 'square',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().square(100, 50, 60).toElement(),
    },
    {
      path: new Path().square(10, 50, 60).attr('class', 'filled').toElement(),
    },
  ],
};
