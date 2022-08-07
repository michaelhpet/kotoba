import { Typography } from '@mui/material'
import WordType from '../types/WordType'
import Meaning from './Meaning'

export default function Word(props: WordType) {
  return (
    <>
      {props.meanings.map((itm, idx) => (
        <Meaning
          key={idx}
          partOfSpeech={itm.partOfSpeech}
          definitions={itm.definitions}
        />
      ))}

      {props.origin && <Typography>Origin: {props.origin}</Typography>}
    </>
  )
}
