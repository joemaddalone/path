import Path from '@joemaddalone/path';
import docs from './docs';

export default {
  ...docs.roundedRect,
  name: 'roundedRect',
  w: 140,
  h: 120,
  paths: [
    {
      path: new Path().roundedRect(120, 60, 20, 62, 62),
    },
  ],
};
