import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],         // React Native 更喜欢 ESM
  platform: 'browser',     // 避免引入 Node.js 模块
  dts: true,               // 导出类型声明
  outDir: 'dist',
  clean: true,
  treeshake: true,
});