import Path from '../web_modules/path.js';
import { svg, g } from '../helpers/svg.js';
import docs from './docs.js';

export default {
	...docs.rect,
	name: 'rect',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().rect(120, 60, 60, 60).toElement(),
    },
    {
      path: new Path().rect(10, 5, 60, 60).attr('class', 'filled').toElement(),
    },
  ],
};
