import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Get In Touch for Web Development & Digital Tools',
  description: 'Ready to start your project? Contact Desmond Asiedu for professional web development, custom digital tools, and consultation services. Based in Accra, Ghana.',
  keywords: [
    'contact web developer Ghana', 'web development consultation Accra', 'digital tools consultation',
    'React development Ghana', 'Next.js development contact', 'software development Ghana',
    'business automation consultation', 'workflow optimization Ghana', 'startup development contact'
  ],
  openGraph: {
    title: 'Contact Us - Get In Touch for Web Development & Digital Tools',
    description: 'Ready to start your project? Contact Desmond Asiedu for professional web development, custom digital tools, and consultation services. Based in Accra, Ghana.',
    url: '/contact',
    images: [
      {
        url: 'https://buildwithdesmond.vercel.app/brand/social_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact The Geek Toolbox - Web Development & Digital Tools',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    title: 'Contact Us - Get In Touch for Web Development & Digital Tools',
    description: 'Ready to start your project? Contact Desmond Asiedu for professional web development, custom digital tools, and consultation services. Based in Accra, Ghana.',
    images: ['https://buildwithdesmond.vercel.app/brand/social_preview.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
