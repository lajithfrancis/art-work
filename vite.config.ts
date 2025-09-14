import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import spa from 'vite-plugin-spa-fallback';
import path from 'path';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  const base = isProduction ? '/art-work/' : '/';

  return {
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [react(), spa()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
  };
});
