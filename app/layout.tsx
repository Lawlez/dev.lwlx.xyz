import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import theme from '../theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { globals } from '../globals'

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
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        />
        <link
          href="https://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKQ.woff"
          rel="preload"
          crossOrigin="anonymous"
          type="font/woff2"
          as="font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          />
        )}
        {globals.googleAnalyticsId && (
          <script
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
        <style>{`
          html,
          body {
            min-height: 100%;
            font-family: Fira Code, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <Header />
            <Container disableGutters>
              {children}
            </Container>
            <Box flex={1} />
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
