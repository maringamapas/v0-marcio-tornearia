import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Archivo } from "next/font/google"
import { SITE_CONFIG } from "@/src/config/site-config"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
  description: SITE_CONFIG.client.description,
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.client.name }],
  creator: SITE_CONFIG.client.name,
  publisher: SITE_CONFIG.client.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
    description: SITE_CONFIG.client.description,
    type: "website",
    url: `https://${SITE_CONFIG.client.domain}`,
    siteName: SITE_CONFIG.client.name,
    locale: 'pt_BR',
    images: [
      {
        url: SITE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.client.name} - ${SITE_CONFIG.footer.description}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
    description: SITE_CONFIG.client.description,
    images: [SITE_CONFIG.seo.ogImage],
  },
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f57c00' },
    { media: '(prefers-color-scheme: dark)', color: '#f57c00' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prime Tornearia" />
      </head>
      <body
        className={`${inter.variable} ${archivo.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
