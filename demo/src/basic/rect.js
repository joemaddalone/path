import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.rect,
  name: 'rect',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().rect(120, 60, 60, 60),
    },
  ],
};
