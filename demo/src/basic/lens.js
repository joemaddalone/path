import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.lens,
  name: 'lens',
  w: 155,
  h: 120,
  paths: [
    {
      path: new Path().lens(150, 75, 80, 50),
    },
  ],
};
