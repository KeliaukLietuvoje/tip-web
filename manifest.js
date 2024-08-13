export const manifestForPlugIn = {
  registerType: 'autoUpdate',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  workbox: {
    navigateFallbackDenylist: [/^\/(api|files)\/.*/],
  },
  manifest: {
    name: 'Turizmas',
    short_name: 'Turizmas',
    description: 'Turizmas',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#171717',
    background_color: '#0a1353',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};
