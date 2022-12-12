import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { globals } from '../globals'
import theme from '../theme'
import { ThemeProvider } from '@mui/material'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
          />
          <link
            href='https://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKQ.woff'
            rel='preload'
            crossOrigin={'crossorigin'}
            type='font/woff2'
            as='font'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
            rel='stylesheet'
          />
          {globals.googleAnalyticsId && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
            ></script>
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
            ></script>
          )}
        </Head>
        <Header />
        <Container disableGutters>
        <Component {...pageProps} />
        </Container>
        <Box flex={1} />
        <Footer />
        <style jsx global>{`
          // reset.css
          html,
          body,
          #__next {
            min-height: 100%;
            font-family: Fira Code, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </Box>
    </ThemeProvider>
  )
}

export default App
