import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  NoSsr,
  ThemeProvider,
} from '@mui/material'
import NextProgress from 'next-progress'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import getDesignTokens from '../helpers/getDesignTokens'
import getProgressCss from '../helpers/getProgressCss'
import usePalette from '../state/palette'

function MyApp({ Component, pageProps }: AppProps) {
  const paletteMode = usePalette((state) => state.palette)
  const theme = useMemo(
    () => createTheme(getDesignTokens(paletteMode)),
    [paletteMode]
  )

  const [mount, setMount] = useState(false)
  useEffect(() => {
    let mounted = true
    if (mounted) {
      setMount(true)
    }
    return () => {
      mounted = false
    }
  }, [paletteMode])

  if (!mount) return null

  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Kotoba | Online Dictionary</title>
          <meta name='description' content='Kotoba online dictionary' />
          <meta
            name='viewport'
            content='width=device-width, height=device-height,  minimum-scale=1'
          />
          <meta
            name='theme-color'
            content={theme.palette.background.default}></meta>
        </Head>
        <NextProgress
          delay={0}
          options={{ showSpinner: false, trickle: false }}
        />
        <GlobalStyles
          styles={{
            ...getProgressCss(theme),
            '.MuiLink-root': {
              WebkitTapHighlightColor: 'transparent',
            },
          }}
        />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSsr>
  )
}

export default MyApp
