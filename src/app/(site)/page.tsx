import type { Metadata } from 'next'
import { HomePageClient } from './HomePageClient'

export const metadata: Metadata = {
  title: 'Custom Digital Tools & Web Development Portfolio',
  description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles. Based in Accra, Ghana.',
  keywords: [
    'web development Ghana', 'custom software development Accra', 'digital tools development',
    'React development Ghana', 'Next.js development', 'TypeScript development', 'full-stack development',
    'business automation', 'workflow optimization', 'startup development', 'SaaS development',
    'AI-driven development', 'machine learning integration', 'Ghana web developer', 'Accra software developer'
  ],
  openGraph: {
    title: 'Custom Digital Tools & Web Development Portfolio',
    description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles.',
    url: '/',
    images: [
      {
        url: '/brand/social_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The Geek Toolbox - Professional Web Development Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    title: 'Custom Digital Tools & Web Development Portfolio',
    description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles.',
    images: ['/brand/social_preview.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
