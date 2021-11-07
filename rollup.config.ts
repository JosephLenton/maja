import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import ttypescript from 'ttypescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    sourcemap: true,
    format: 'es'
  },
  plugins: [
    postcss(),
    typescript({ tsconfig: './tsconfig.json', typescript: ttypescript })
  ]
};
