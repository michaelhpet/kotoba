import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { IconButton, Skeleton, Stack, Typography } from '@mui/material'
import PhoneticsAndSoundsType from '../types/PhoneticsAndSoundsType'
import Phonetic from './Phonetic'
import useSound from 'use-sound'
import getPhonetics from '../helpers/getPhonetics'
import PhoneticType from '../types/PhoneticType'

export default function PhoneticsAndSounds(props: PhoneticsAndSoundsType) {
  const phonetics: PhoneticType[] = getPhonetics(props.data)
  const defaultPhoneticAudio =
    phonetics.filter((phonetic) => Boolean(phonetic.audio))[0]?.audio || ''

  const [play] = useSound(defaultPhoneticAudio)

  return (
    <Stack direction='row' alignItems='flex-start' spacing={1}>
      <IconButton onClick={() => play()}>
        <VolumeUpRoundedIcon sx={{ fontSize: 48 }} />
      </IconButton>

      <div>
        {props.data[0].word ? (
          <Typography variant='h3' fontWeight='bold'>
            {props.data[0].word}
          </Typography>
        ) : (
          <Skeleton variant='text' animation='wave' width={60} />
        )}

        {phonetics.map((itm, idx) => (
          <Phonetic key={idx} text={itm.text} audio={itm.audio} />
        ))}
      </div>
    </Stack>
  )
}
