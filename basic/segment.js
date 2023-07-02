import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

export default {
  ...docs.segment,
  name: 'segment',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().segment(60, 60, 100, 0, 270).toElement(),
    },
    {
      path: new Path().circle(10, 60, 60).attr('class', 'filled').toElement(),
    },
  ],
};
