import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/index.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js'
    }
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ],
  external: ['vue']
};
