import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

export default {
  ...docs.triangle,
  name: 'triangle',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().triangle(95, 50, 60).toElement(),
    },
    {
      path: new Path().triangle(10, 50, 60).attr('class', 'filled').toElement(),
    },
  ],
};
