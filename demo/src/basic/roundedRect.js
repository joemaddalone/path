import Path from 'path';
import docs from './docs';

export default {
  ...docs.roundedRect,
  name: 'roundedRect',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().roundedRect(120, 60, 20 ,60, 60).toElement(),
    },
    {
      path: new Path().roundedRect(10, 5, 5, 60, 60).attr('class', 'filled').toElement(),
    },
  ],
};
