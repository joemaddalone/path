import Path from '../web_modules/path.js';
import { svg, g } from '../helpers/svg.js';
import docs from './docs.js';

export default {
	...docs.regPolygon,
	name: 'regPolygon',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().regPolygon(100, 6, 50, 50).toElement(),
    },
    {
      path: new Path().regPolygon(10, 6, 50, 50).attr('class', 'filled').toElement(),
    },
  ],
};
