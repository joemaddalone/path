import Path from '../web_modules/path.js';
import docs from './docs.js';

export default {
  ...docs.star,
  name: 'star',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().star(120, 5, 70, 60).toElement(),
    },
    {
      path: new Path().star(15, 5, 70, 60).toElement({ class: 'filled' }),
    },
  ],
};
