import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

export default {
  ...docs.radialLines,
  name: 'radialLines',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().radialLines(60, 120, 8, 70, 60).toElement(),
    },
  ],
};
