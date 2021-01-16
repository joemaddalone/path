import Path from '../web_modules/path.js';
import docs from './docs.js';

export default {
  ...docs.symH,
  name: 'symH',
  w: 200,
  h: 120,
  paths: [
    {
      path: new Path().symH(150, 100, 100, 60).toElement(),
    },
  ],
};
