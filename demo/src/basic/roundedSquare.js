import Path from 'path';
import docs from './docs';

export default {
  ...docs.roundedSquare,
  name: 'roundedSquare',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().roundedSquare(100, 15, 55, 60).toElement(),
    },
    {
      path: new Path()
        .roundedSquare(10, 5, 55, 60)
        .attr('class', 'filled')
        .toElement(),
    },
  ],
};
