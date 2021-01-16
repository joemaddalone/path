import Path from '../web_modules/path.js';
import docs from './docs.js';

export default {
  ...docs.symX,
  name: 'symX',
  w: 120,
  h: 120,
  paths: [
    {
      path: new Path().symX(100, 100, 60, 60).toElement(),
    },
  ],
};
