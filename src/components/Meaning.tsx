import { Typography } from '@mui/material'
import MeaningType from '../types/MeaningType'
import Definition from './Definition'

export default function Meaning(props: MeaningType) {
  return (
    <div>
      <Typography variant='h6' fontStyle='italic'>
        {props.partOfSpeech}
      </Typography>

      <ol>
        {props.definitions.map((definition, idx) => (
          <li key={idx}>
            <Definition
              definition={definition.definition}
              example={definition.example}
              synonyms={definition.synonyms}
              antonyms={definition.antonyms}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
