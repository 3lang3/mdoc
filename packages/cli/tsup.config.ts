import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  sourcemap: false,
  clean: true,
  outDir: 'dist',
  format: ['esm'],
  target: 'node16',
  watch: process.env.NODE_ENV === 'development'
})