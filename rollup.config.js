import css from 'modular-css-rollup';

const plugins = [
  css({
    css: './dist/style.css'
  }),
];

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins,
  dest: 'dist/bundle.js',
  moduleName: 'rollup-css-module-test'
};
