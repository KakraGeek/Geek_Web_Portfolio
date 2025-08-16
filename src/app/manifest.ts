import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Geek Toolbox – Portfolio',
    short_name: 'Geek Toolbox',
    description: 'AI-first, high-conversion portfolio by Desmond Asiedu.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0B1220',
    theme_color: '#1E90FF',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };
}
