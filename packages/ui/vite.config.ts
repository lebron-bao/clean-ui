import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'cleanui',
      fileName: 'cleanui',
    },
    minify: false,
    rollupOptions: {},
  },
});
