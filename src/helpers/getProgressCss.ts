import { Theme } from '@mui/material'

export default function getProgressCss(theme: Theme): object {
  return {
    '#nprogress .bar': {
      background: `linear-gradient(to right, transparent, ${theme.palette.secondary.main}) !important`,
      borderRadius: 10,
      height: '3px !important',
    },

    '#nprogress .peg': {
      boxShadow: `0 0 10px ${theme.palette.secondary.main}, 0 0 5px ${theme.palette.secondary.main} !important`,
    },
  }
}
