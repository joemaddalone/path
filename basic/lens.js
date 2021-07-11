import Path from '../web_modules/path.js';
import docs from './docs.js';

export default {
  ...docs.lens,
  name: 'lens',
  w: 155,
  h: 120,
  paths: [
    {
      path: new Path().lens(150, 75, 80, 50).toElement(),
    },
    {
      path: new Path()
        .lens(15, 7.5, 80, 50)
        .attr('class', 'filled')
        .toElement(),
    },
  ],
};
