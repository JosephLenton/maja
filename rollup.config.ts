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
  external: [
    'maja-util',
    'classnames',
    'react',
    'react-dom',
  ],
  plugins: [
    postcss(),
    typescript({
      tsconfig: './tsconfig.json',
      typescript: ttypescript,
      exclude: [
        "**/__tests__",
        "**/*.test.ts",
        "**/*.stories.ts",
        "**/*.stories.tsx",
      ],
    })
  ],
  onwarn: warning => {
    throw new Error(warning.message);
  },
};
