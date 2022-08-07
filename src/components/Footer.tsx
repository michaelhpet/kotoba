import { Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Stack direction='row' alignItems='center' justifyContent='center' mt={6}>
        <Typography variant='body1' color='text.secondary' textAlign='center'>
          Created by &copy;{new Date().getFullYear()}&nbsp;
          <Link href='https://michael-peter.web.app' passHref>
            <MuiLink color='text.secondary' target='_blank' rel='noreferrer'>
              Michael Peter&nbsp;&bull;&nbsp; michael-peter.web.app
            </MuiLink>
          </Link>
        </Typography>
      </Stack>
    </footer>
  )
}
