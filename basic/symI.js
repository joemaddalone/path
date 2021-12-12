import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

export default {
  ...docs.symI,
  name: 'symI',
  w: 120,
  h: 120,
  paths: [
    {
      path: new Path().symI(100, 100, 60, 60).toElement(),
    },
  ],
};
