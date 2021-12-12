import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

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
