import Path from '../web_modules/path.js';
import { svg, g } from '../helpers/svg.js';
import docs from './docs.js';

export default {
  ...docs.circle,
  name: 'circle',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().circle(95, 50, 50).toElement(),
    },
    {
      path: new Path().circle(10, 50, 50).attr('class', 'filled').toElement(),
    },
  ],
};
