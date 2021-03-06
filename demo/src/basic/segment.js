import Path from 'path';
import docs from './docs';

export default {
  ...docs.segment,
  name: 'segment',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().segment(60, 60, 100, 0, 270).toElement(),
    },
    {
      path: new Path().circle(10, 60, 60).attr('class', 'filled').toElement(),
    },
  ],
};
