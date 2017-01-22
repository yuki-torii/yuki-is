import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [ { dest: 'dist/yuki-is.js', format: 'umd' } ]

if (process.env.BUILD) {
  targets = targets.concat([
    { dest: 'dist/yuki-is.common.js', format: 'cjs' },
    { dest: 'dist/yuki-is.es5.js', format: 'es' }
  ])
}

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: 'yuki-is',
  targets: targets
}
