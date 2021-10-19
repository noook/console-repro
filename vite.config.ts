import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import eslintPlugin from 'vite-plugin-eslint';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    eslintPlugin({ fix: true }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Poppins',
            styles: 'ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
            defer: true,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
