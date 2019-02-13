import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';


export default [{
  input: ['src/my-navbar.js'],
  output: [
    {
      dir: 'build',
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      // use "jsnext:main" if possible
      // legacy field pointing to ES6 module in third-party libraries,
      // deprecated in favor of "pkg.module":
      // - see: https://github.com/rollup/rollup/wiki/pkg.module
      jsnext: true,  // Default: false
    }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      terser({
        warnings: true,
        mangle: {
          module: true,
        },
      })
  ]
}];