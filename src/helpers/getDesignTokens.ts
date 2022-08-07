import { PaletteMode } from '@mui/material'

export default function getDesignTokens(mode: PaletteMode) {
  return {
    palette: {
      mode,
      primary: {
        main: '#000',
      },
      secondary: {
        main: 'rgba(255, 0, 0, 1)',
      },
      background: {
        default: mode === 'light' ? '#fff' : '#000',
        paper:
          mode === 'light' ? 'rgba(245, 245, 245, 1)' : 'rgba(35, 34, 34, 1)',
      },
    },
    typography: {
      fontFamily: 'Nunito, san-serif',
    },
  }
}
