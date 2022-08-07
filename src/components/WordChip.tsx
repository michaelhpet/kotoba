import { Chip, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import WordChipType from '../types/WordChipType'

export default function WordChip(props: WordChipType) {
  return (
    <Link href={`/${props.word}`} passHref>
      <MuiLink underline='none'>
        <Chip
          size='small'
          label={props.word}
          sx={{ cursor: 'pointer', margin: '4px' }}
        />
      </MuiLink>
    </Link>
  )
}
