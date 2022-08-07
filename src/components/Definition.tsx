import { Stack, Typography } from '@mui/material'
import usePalette from '../state/palette'
import DefinitionType from '../types/DefinitionType'
import WordChip from './WordChip'

export default function Definition(props: DefinitionType) {
  const palette = usePalette((state) => state.palette)

  return (
    <>
      <Typography>{props.definition}</Typography>

      {props.example && (
        <Stack direction='row' alignItems='center' spacing={1}>
          <Typography color={palette === 'dark' ? 'steelblue' : 'blue'}>
            example:
          </Typography>
          <Typography gutterBottom color='text.secondary'>
            &quot;{props.example}&quot;
          </Typography>
        </Stack>
      )}

      {props.synonyms && props.synonyms.length > 0 && (
        <Stack direction='row' alignItems='center' spacing={1} mb={1}>
          <Typography
            color={palette === 'light' ? 'green' : 'mediumspringgreen'}>
            Synonymns:
          </Typography>
          {props.synonyms.map((synonym, idx) => (
            <WordChip key={idx} word={synonym} />
          ))}
        </Stack>
      )}

      {props.antonyms && props.antonyms.length > 0 && (
        <Stack direction='row' alignItems='center' spacing={1} mb={1}>
          <Typography color='orangered'>Antonyms:</Typography>
          {props.antonyms.map((antonym, idx) => (
            <WordChip key={idx} word={antonym} />
          ))}
        </Stack>
      )}
    </>
  )
}
