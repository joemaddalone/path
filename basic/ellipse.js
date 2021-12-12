import Path from '../web_modules/@joemaddalone/path.js';
import docs from './docs.js';

export default {
  ...docs.ellipse,
  name: 'ellipse',
  w: 155,
  h: 120,
  paths: [
    {
      path: new Path().ellipse(150, 75, 80, 50).toElement(),
    },
    {
      path: new Path()
        .ellipse(15, 7.5, 80, 50)
        .attr('class', 'filled')
        .toElement(),
    },
  ],
};
