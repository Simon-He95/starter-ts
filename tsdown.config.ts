import { defineConfig } from 'tsdown'

export default defineConfig({
  target: 'node14',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  platform: 'node', // 明确指定为 Node.js 平台
})
