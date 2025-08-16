import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://buildwithdesmond-o0eaad9xa-desmond-asiedus-projects.vercel.app'),
  title: {
    default: 'The Geek Toolbox - Custom Digital Tools & Web Development Portfolio',
    template: '%s | The Geek Toolbox'
  },
  description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles. Based in Accra, Ghana.',
  keywords: [
    // Core Services
    'web development', 'custom software development', 'digital tools', 'web applications',
    'mobile-first design', 'responsive web design', 'frontend development', 'backend development',
    'full-stack development', 'API development', 'database design', 'cloud solutions',
    
    // Technologies
    'React development', 'Next.js development', 'TypeScript development', 'Node.js development',
    'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel',
    
    // Business Focus
    'business automation', 'workflow optimization', 'process improvement', 'digital transformation',
    'startup development', 'SaaS development', 'e-commerce solutions', 'CRM development',
    'enterprise software', 'business intelligence', 'data visualization',
    
    // AI & Innovation
    'AI-driven development', 'machine learning integration', 'automation tools', 'smart workflows',
    'predictive analytics', 'chatbot development', 'AI-powered applications',
    
    // Industry Keywords
    'Ghana web developer', 'Accra software developer', 'African tech', 'digital solutions Ghana',
    'professional portfolio', 'freelance developer', 'consultant developer', 'tech consultant',
    
    // SEO & Performance
    'fast loading websites', 'SEO optimization', 'performance optimization', 'accessibility compliance',
    'WCAG compliance', 'mobile optimization', 'progressive web apps'
  ],
  authors: [{ name: 'Desmond Asiedu', url: 'https://github.com/KakraGeek' }],
  creator: 'Desmond Asiedu',
  publisher: 'The Geek Toolbox',
  category: 'Technology',
  classification: 'Web Development & Digital Tools',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildwithdesmond-o0eaad9xa-desmond-asiedus-projects.vercel.app',
    title: 'The Geek Toolbox - Custom Digital Tools & Web Development Portfolio',
    description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles.',
    siteName: 'The Geek Toolbox',
    images: [
      {
        url: '/brand/social_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The Geek Toolbox - Professional Web Development Portfolio',
        type: 'image/jpeg',
      },
    ],
    countryName: 'Ghana',
    emails: ['desmond.asiedu@gmail.com', 'thegeektoolbox@gmail.com'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Geek Toolbox - Custom Digital Tools & Web Development Portfolio',
    description: 'Professional web development and custom digital tools for businesses, startups, and entrepreneurs. AI-driven development with rapid delivery cycles.',
    images: ['/brand/social_preview.jpg'],
    creator: '@KakraGeek',
    site: '@TheGeekToolbox',
  },
  alternates: {
    canonical: 'https://buildwithdesmond-o0eaad9xa-desmond-asiedus-projects.vercel.app',
  },
  other: {
    'geo.region': 'GH',
    'geo.placename': 'Accra',
    'geo.position': '5.5600;-0.2057',
    'ICBM': '5.5600, -0.2057',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/brand/portfolio_logo.svg" />
        <link rel="apple-touch-icon" href="/brand/portfolio_logo.svg" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />
      </head>
      <body className={`${inter.className} antialiased bg-noir text-white`}>
        {children}
      </body>
    </html>
  )
}
