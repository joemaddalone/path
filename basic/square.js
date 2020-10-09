import Path from '../web_modules/path.js';
import { svg, g } from '../helpers/svg.js';
import docs from './docs.js';

export default {
	...docs.square,
	name: 'square',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().square(100, 50, 50).toElement(),
    },
    {
      path: new Path().square(10, 50, 50).attr('class', 'filled').toElement(),
    },
  ],
};
