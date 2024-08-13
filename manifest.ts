export const manifestForPlugIn = (baseUrl = '') => {
  return {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    workbox: {
      navigateFallbackDenylist: [/^\/(api|files)\/.*/],
      maximumFileSizeToCacheInBytes: 20000000, // 20 MB
    },
    manifest: {
      name: 'Turizmas',
      short_name: 'Turizmas',
      description: 'Turizmas',
      icons: [
        {
          src: `${baseUrl}/android-chrome-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${baseUrl}/android-chrome-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${baseUrl}/apple-touch-icon.png`,
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${baseUrl}/maskable_icon.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      theme_color: '#171717',
      background_color: '#0a1353',
      display: 'standalone',
      start_url: `${baseUrl}/index.html`,
      scope: `${baseUrl || '/'}`,
      orientation: 'portrait',
    },
  };
};
