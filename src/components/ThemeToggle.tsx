import { Button as MuiButton, styled } from '@mui/material'
import usePalette from '../state/palette'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded'

export default function ThemeToggle() {
  const { palette, setPalette } = usePalette()

  const handleClick = () => {
    setPalette(palette === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      endIcon={
        palette === 'light' ? <LightbulbRoundedIcon /> : <DarkModeRoundedIcon />
      }
      onClick={handleClick}>
      {palette}
    </Button>
  )
}

const Button = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(10),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: theme.palette.background.default,
}))
