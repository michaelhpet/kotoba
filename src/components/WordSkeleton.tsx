import { Skeleton, Stack } from '@mui/material'

export default function WordSkeleton() {
  return (
    <Stack spacing={2}>
      <Stack mb={1}>
        <Skeleton variant='text' animation='wave' width={50} height={24} />
      </Stack>

      <Stack spacing={1}>
        {['100%', '80%', '50%', '90%'].map((itm, idx) => (
          <Stack key={idx} pl={2}>
            <Skeleton variant='text' animation='wave' width={itm} height={24} />
          </Stack>
        ))}
      </Stack>

      <Stack>
        <Skeleton variant='text' animation='wave' width={250} height={24} />
      </Stack>
    </Stack>
  )
}
