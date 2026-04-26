import type { Metadata } from 'next'
import Script from 'next/script'
import Providers from './Providers'
import { globals } from '../globals'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'dev.lwlx.xyz | Cybersecurity & Developer blog',
    template: '%s | dev.lwlx.xyz',
  },
  description: globals.siteDescription,
  metadataBase: new URL(globals.url),
  openGraph: {
    siteName: globals.siteName,
    type: 'website',
    images: ['/lwlzcolors-lawlez-sm.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: globals.twitterHandle,
    creator: globals.twitterHandle,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKQ.woff"
          rel="preload"
          crossOrigin="anonymous"
          type="font/woff2"
          as="font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        {globals.googleAnalyticsId && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
        )}
        {globals.googleAnalyticsId && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${globals.googleAnalyticsId}');
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}
