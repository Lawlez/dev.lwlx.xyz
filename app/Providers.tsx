'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import theme from '../theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

/**
 * Client-side providers and layout shell.
 * MUI's theme object contains functions that can't be serialized
 * across the server→client boundary, so ThemeProvider and all MUI
 * components must live inside this client component.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container disableGutters>
          {children}
        </Container>
        <Box sx={{ flex: 1 }} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
