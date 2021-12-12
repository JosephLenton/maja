import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    sourcemap: true,
    format: 'es'
  },
  external: [
    '@maja-ui/util',
    'classnames',
    'react',
    'react-dom',
  ],
  plugins: [
    postcss({
      extract: true,
    }),
    typescript({
      tsconfig: './tsconfig.json',
    })
  ],
  onwarn: warning => {
    throw new Error(warning.message);
  },
}
