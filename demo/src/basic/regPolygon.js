import Path from '@joemaddalone/path';
import docs from './docs';

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
      path: new Path()
        .regPolygon(10, 6, 50, 50)
        .attr('class', 'filled')
        .toElement(),
    },
  ],
};
