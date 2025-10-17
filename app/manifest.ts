import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kamil Leśkiewicz - Portfolio Programisty',
    short_name: 'K. Leśkiewicz',
    description: 'Portfolio Kamila Leśkiewicza - programista fullstack specjalizujący się w React, Next.js i TypeScript',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
