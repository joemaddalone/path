import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.js',
  output: {
    file: `dist/path.min.js`,
    name: 'path',
    format: 'umd',
    indent: false,
    extend: true,
  },
};

export default {
  ...config,
  plugins: [babel({ babelHelpers: 'bundled' }), terser()],
};
