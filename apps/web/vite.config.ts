import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';
import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,
      includeAssets: ['assets/icon/favicon.png', 'assets/splash/*.png'],
      manifest: {
        short_name: 'Vocario',
        name: 'Vocario',
        icons: [
          {
            src: 'assets/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 25 * 1024 * 1024, // 25MB
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
    tsconfigPaths(),
    htmlLinkPlugin(),
    mkcert(),
  ],

  server: { https: {}, open: true, port: 3000 },

  define: {
    __APP_NAME__: JSON.stringify(process.env.npm_package_name),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
    },
    dir: './src',
  },
});

function htmlLinkPlugin() {
  let basePath = '';
  return {
    name: 'html-link-plugin',
    enforce: 'post',
    configResolved(config) {
      basePath = config.base;
    },
    transformIndexHtml(html, { bundle }) {
      if (bundle) {
        for (const asset of Object.values(bundle).filter(asset => asset.fileName.includes('.woff'))) {
          const linkTag = `<link rel="preload" href="${basePath}${asset.fileName}" as="font" crossorigin="anonymous">\n`;
          html = html.replace('</head>', linkTag + '</head>');
        }
      }
      return html;
    },
  } as PluginOption;
}
