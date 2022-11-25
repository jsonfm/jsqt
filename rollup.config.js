// rollup.config.js
import { createBasicConfig } from '@open-wc/building-rollup';
import { terser } from "@chiogen/rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import { name, main, browser} from "./package.json";


const baseConfig = createBasicConfig();


export default {
  input: './src/jsqt.ts',
  output: [
    {
        file: main,
        name: name,
        format: 'cjs',
        sourcemap: true,
     },
     {
      file:browser,
      name: name,
      format: 'umd',
      sourcemap: true,
     }
  ],
  plugins: [
    typescript(),
    terser()
  ],
};