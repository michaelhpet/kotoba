import { Stack, Typography, Link as MuiLink } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import Link from 'next/link'

export interface BrandProps {
  fontVariant?: Variant
  useLetter?: true
}

export default function Brand(props: BrandProps) {
  return (
    <Link href='/' passHref>
      <MuiLink underline='none' color='text.primary'>
        <Stack direction='row' alignItems='center'>
          <Typography variant={props.fontVariant || 'h5'} fontWeight='bold'>
            {props.useLetter ? 'k' : 'kotoba'}
          </Typography>
          <Typography
            variant={props.fontVariant || 'h4'}
            color='secondary'
            fontWeight='bold'>
            |
          </Typography>
        </Stack>
      </MuiLink>
    </Link>
  )
}
