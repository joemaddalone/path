import Path from '../web_modules/path.js';
import docs from './docs.js';

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
