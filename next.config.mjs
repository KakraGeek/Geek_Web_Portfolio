import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

export default withPWA({
  dest: 'public',
  disable: !isProd,
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: ({ request }) => ['style', 'script', 'worker', 'font'].includes(request.destination),
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-assets' }
    },
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }
      }
    },
    {
      urlPattern: ({ request }) =>
        request.destination === 'document' ||
        request.headers.get('accept')?.includes('application/json'),
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'pages-data' }
    },
    {
      urlPattern: ({ url }) => url.pathname.startsWith('/api/contact'),
      handler: 'NetworkOnly'
    }
  ]
})({
  images: {
    domains: ['vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
});
