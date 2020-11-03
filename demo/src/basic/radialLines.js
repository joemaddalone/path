import Path from 'path';
import docs from './docs';

export default {
  ...docs.radialLines,
  name: 'radialLines',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().radialLines(120, 60, 8, 70, 60).toElement(),
    },
  ],
};
