import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.symH,
  name: 'symH',
  w: 200,
  h: 120,
  paths: [
    {
      path: new Path().symH(150, 100, 100, 60).toElement(),
    },
  ],
};
