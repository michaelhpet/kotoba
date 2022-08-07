import { IconButton, Stack, Typography } from '@mui/material'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import useSound from 'use-sound'
import PhoneticType from '../types/PhoneticType'

export default function Phonetic(props: PhoneticType) {
  const [play] = useSound(props.audio || '')

  return (
    <Stack direction='row' alignItems='center' spacing={0.5}>
      {props.text && (
        <>
          <Typography variant='h6' color='text.secondary'>
            {props.text}
          </Typography>
          {props.audio && (
            <IconButton onClick={() => play()}>
              <VolumeUpRoundedIcon
                sx={(theme) => ({ color: theme.palette.text.secondary })}
              />
            </IconButton>
          )}
        </>
      )}
    </Stack>
  )
}
