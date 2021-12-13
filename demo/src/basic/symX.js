import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.symX,
  name: 'symX',
  w: 120,
  h: 120,
  paths: [
    {
      path: new Path().symX(100, 100, 60, 60),
    },
  ],
};
