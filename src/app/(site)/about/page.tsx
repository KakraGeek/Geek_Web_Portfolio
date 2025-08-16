import type { Metadata } from 'next'
import { AboutPageClient } from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Me - Web Developer & Digital Tools Creator',
  description: 'Meet Desmond Asiedu, a passionate web developer and digital tools creator based in Accra, Ghana. Learn about my journey, mission, and approach to creating impactful digital solutions.',
  keywords: [
    'Desmond Asiedu', 'Ghana web developer', 'Accra software developer', 'web development journey',
    'digital tools creator', 'full-stack developer Ghana', 'React developer Accra', 'Next.js developer',
    'TypeScript developer', 'African tech developer', 'portfolio developer Ghana'
  ],
  openGraph: {
    title: 'About Me - Web Developer & Digital Tools Creator',
    description: 'Meet Desmond Asiedu, a passionate web developer and digital tools creator based in Accra, Ghana. Learn about my journey, mission, and approach to creating impactful digital solutions.',
    url: '/about',
    images: [
      {
        url: 'https://buildwithdesmond.vercel.app/brand/social_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Desmond Asiedu - Web Developer & Digital Tools Creator',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    title: 'About Me - Web Developer & Digital Tools Creator',
    description: 'Meet Desmond Asiedu, a passionate web developer and digital tools creator based in Accra, Ghana. Learn about my journey, mission, and approach to creating impactful digital solutions.',
    images: ['https://buildwithdesmond.vercel.app/brand/social_preview.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
