import {
  BoxProps,
  styled,
  Typography,
  Stack as MuiStack,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Brand from './Brand'
import SearchBox from './SearchBox'
import ThemeToggle from './ThemeToggle'

export interface NavProps extends BoxProps {
  index?: true
}

export default function NavBar(props: NavProps) {
  const smDown = useMediaQuery(useTheme().breakpoints.down('sm'))

  if (props.index && !smDown)
    return (
      <Stack>
        <Grid container alignItems='center'>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <MuiStack alignItems='center' justifyContent='center'>
              <Brand fontVariant='h2' />
              <Typography>your online dictionary</Typography>
            </MuiStack>
          </Grid>
          <Grid item xs={4}>
            <MuiStack
              direction='row'
              alignItems='center'
              justifyContent='flex-end'>
              <ThemeToggle />
            </MuiStack>
          </Grid>
        </Grid>
      </Stack>
    )

  return (
    <Stack>
      <SearchBox magnitude='small' forNav />
    </Stack>
  )
}

const Stack = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  textAlign: 'center',
}))
