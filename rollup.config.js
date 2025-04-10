import path from 'path'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { globSync } from 'glob'
import { dts } from 'rollup-plugin-dts'

import pkg from './package.json'

const createExternal = ({ pkg }) => [...Object.keys(pkg.peerDependencies ?? {})]

const external = createExternal({ pkg })

const rollupConfig = [
  {
    input: Object.fromEntries(
      globSync(`src/**/*.{ts,tsx}`, {
        ignore: `src/**/*.{test,stories}.{ts,tsx}`,
      }).map((file) => {
        return [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length),
          ),
          file,
        ]
      }),
    ),
    output: [
      {
        dir: './dist/esm',
        format: 'esm',
        sourcemap: true,
      },
      {
        dir: './dist/cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs({
        include: /node_modules/,
        ignoreDynamicRequires: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: { noEmit: true },
        noForceEmit: true,
      }),
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
      }),
    ],
    external,
  },
  {
    input: {
      common: 'src/common/index.ts',
      declarative: 'src/declarative/index.ts',
      data: 'src/data/index.ts',
    },
    output: [{ dir: './dist/types', format: 'es' }],
    plugins: [dts()],
  },
]

export default rollupConfig
