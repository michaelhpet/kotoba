import { Box, Stack, Typography } from '@mui/material'
import SearchBox from './SearchBox'

export default function BrandHero() {
  return (
    <Stack alignItems='center' justifyContent='center' py={3}>
      <Stack direction='row' alignItems='center'>
        <Typography variant='h5' fontWeight='bold' textAlign='center'>
          kotoba
        </Typography>
        <Typography
          variant='h4'
          color='secondary'
          fontWeight='bold'
          textAlign='center'>
          |
        </Typography>
      </Stack>

      <Typography
        variant='h2'
        fontWeight='bold'
        textAlign='center'
        gutterBottom>
        your online dictionary
      </Typography>
      <Typography textAlign='center'>
        Find definitions, synonyms, antonyms, and phonetics of words.
      </Typography>
      <Box mt={3}>
        <SearchBox magnitude='small' />
      </Box>
    </Stack>
  )
}
