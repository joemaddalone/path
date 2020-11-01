import Path from 'path';
import docs from './docs';

export default {
  ...docs.radialLines,
  name: 'radialLines',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().radialLines(50, 120, 8, 70, 60).toElement(),
    },
  ],
};
