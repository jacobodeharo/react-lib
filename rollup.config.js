import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const lazyloadedComponents = ['Button', 'Anchor'];

const manualChunks = (id, { getModuleInfo }) => {
  const regExp = new RegExp(
    `/components/.*/(${lazyloadedComponents.join('|')})`
  );
  const match = regExp.exec(id);
  if (match) {
    const component = match[1]; // e.g. "Button"
    const dependentEntryPoints = [];
    // we use a Set here so we handle each module at most once. This
    // prevents infinite loops in case of circular dependencies
    const idsToHandle = new Set(getModuleInfo(id).dynamicImporters);
    for (const moduleId of idsToHandle) {
      const { isEntry, dynamicImporters, importers } = getModuleInfo(moduleId);
      if (isEntry || dynamicImporters.length > 0) {
        dependentEntryPoints.push(moduleId);
      }
      // The Set iterator is intelligent enough to iterate over elements that
      // are added during iteration
      for (const importerId of importers) {
        idsToHandle.add(importerId);
      }
    }
    // If there is a unique entry, we put it into into a chunk based on the entry name
    if (dependentEntryPoints.length === 1) {
      return `${
        dependentEntryPoints[0].split('/').slice(-1)[0].split('.')[0]
      }.${component}`;
    }
    // For multiple entries, we put it into a "shared" chunk
    if (dependentEntryPoints.length > 1) {
      return `shared.${component}`;
    }
  }
};

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true,
    transformers: [
      () => ({
        before: [styledComponentsTransformer],
      }),
    ],
  }),
  typescriptPaths({
    absolute: true,
  }),
  postcss(),
];

const commonConfig = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'build',
      format: 'esm',
      sourcemap: true,
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name].esm.js',
    },
  ],
  manualChunks,
  plugins,
};

export default [
  {
    ...commonConfig,
    output: [
      {
        dir: 'build',
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name].esm.js',
        chunkFileNames: '[name].esm.js',
      },
    ],
  },
  {
    ...commonConfig,
    output: [
      {
        dir: 'build',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
    ],
  },
];
