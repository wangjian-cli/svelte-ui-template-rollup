import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import replace from 'rollup-plugin-replace';
import alias from '@rollup/plugin-alias';

// const production = !process.env.ROLLUP_WATCH;
const production = true;

const aliases = alias({
  resolve: ['.svelte', '.js', '.ts'],
  entries: [{ find: 'src', replacement: __dirname + '/src' }],
});

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'pack/svelte.umd.js',
      format: 'umd',
      name: 'svelteSdk',
    },
  ],
  plugins: [
    typescript(),
    aliases,
    svelte({
      preprocess: autoPreprocess(),
    }),
    resolve(),
    commonjs(),
    json(),
    styles(),
    // compile to good old IE11 compatible ES5
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.mjs', '.html', '.svelte', '.ts'],
      exclude: [
        'node_modules/@babel/**',
        'node_modules/core-js/**',
        /\/core-js\//, // prevent circular depedencies https://github.com/rollup/rollup-plugin-babel/issues/254
        'node_modules/!(' + 'preact|preact-compat' + ')/**',
      ],
    }),
    //环境变量
    replace({
      'process.env.production': production,
    }),
    production && terser(),
  ],
};
