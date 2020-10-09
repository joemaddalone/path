import Path from 'path';
import docs from './docs';

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
