import { Box, Typography } from '@mui/material'
import getSynsAndAnts from '../helpers/getSynsAndAnts'
import usePalette from '../state/palette'
import SynsAndAntsType from '../types/SynsAndAntsType'
import WordChip from './WordChip'

export default function SynsAndAnts(props: SynsAndAntsType) {
  const { synonyms, antonyms } = getSynsAndAnts(props.data)
  const palette = usePalette((state) => state.palette)

  return (
    <>
      {synonyms.length > 0 && (
        <Box
          sx={(theme) => ({
            maxWidth: 300,
            marginBottom: '16px',
            [theme.breakpoints.down('md')]: {
              maxWidth: 'unset',
            },
          })}>
          <Typography
            gutterBottom
            color={palette === 'light' ? 'green' : 'mediumspringgreen'}>
            Synonyms:
          </Typography>
          {synonyms.map((itm, idx) => (
            <WordChip key={idx} word={itm} />
          ))}
        </Box>
      )}

      {antonyms.length > 0 && (
        <Box
          sx={(theme) => ({
            maxWidth: 300,
            marginBottom: '16px',
            [theme.breakpoints.down('md')]: {
              maxWidth: 'unset',
            },
          })}>
          <Typography gutterBottom color='orangered'>
            Antonyms:
          </Typography>
          {antonyms.map((itm, idx) => (
            <WordChip key={idx} word={itm} />
          ))}
        </Box>
      )}
    </>
  )
}
