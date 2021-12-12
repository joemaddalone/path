import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'path';

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'umd',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const PLUGINS = [
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    skipPreflightCheck: true,
  }),
  resolve({
    browser: true,
  }),
  terser(),
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    indent: false,
    extend: true,
  },
  plugins: PLUGINS,
}));

export default config;
