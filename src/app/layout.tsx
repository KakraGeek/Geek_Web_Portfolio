import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'The Geek Toolbox - Portfolio',
  description: 'Custom Digital Tools & Web Development for professionals, teams, and entrepreneurs. AI-driven development with rapid delivery cycles.',
  keywords: ['web development', 'digital tools', 'AI-driven', 'portfolio', 'Ghana', 'The Geek Toolbox'],
  authors: [{ name: 'Desmond Asiedu' }],
  creator: 'Desmond Asiedu',
  publisher: 'The Geek Toolbox',
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
    url: 'https://your-domain.com',
    title: 'The Geek Toolbox - Portfolio',
    description: 'Custom Digital Tools & Web Development for professionals, teams, and entrepreneurs.',
    siteName: 'The Geek Toolbox Portfolio',
    images: [
      {
        url: '/brand/portfolio_logo.svg',
        width: 1200,
        height: 630,
        alt: 'The Geek Toolbox Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Geek Toolbox - Portfolio',
    description: 'Custom Digital Tools & Web Development for professionals, teams, and entrepreneurs.',
    images: ['/brand/portfolio_logo.svg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
