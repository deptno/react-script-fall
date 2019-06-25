import typescript from 'rollup-plugin-typescript2'

export default {
  input: './lib/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          jsx: 'react',
          declaration: true,
        }
      }
    }),
  ],
  moduleContext(id) {
    return 'this'
  }
}
