import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.circle,
  name: 'circle',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().circle(95, 50, 50),
    },
  ],
};
