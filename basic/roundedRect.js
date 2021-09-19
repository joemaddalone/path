import Path from '../web_modules/path.js';
import docs from './docs.js';

export default {
  ...docs.roundedRect,
  name: 'roundedRect',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().roundedRect(120, 60, 20, 62, 62).toElement(),
    },
    {
      path: new Path()
        .roundedRect(10, 5, 5, 62, 62)
        .attr('class', 'filled')
        .toElement(),
    },
  ],
};
