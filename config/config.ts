import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  base: '/umitest/',
  publicPath: './',
  hash: true,
  routes: routes,
  history: {
    type: 'browser',
  },
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
});
