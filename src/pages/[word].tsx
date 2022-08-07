import {
  Grid,
  Typography,
  Stack,
  styled,
  Box,
  Skeleton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../components/Layout'
import PhoneticsAndSounds from '../components/PhoneticsAndSounds'
import SynsAndAnts from '../components/SynsAndAnts'
import Word from '../components/Word'
import WordSkeleton from '../components/WordSkeleton'
import fetcher from '../helpers/fetcher'
import WordType from '../types/WordType'

const WordPage: NextPage = () => {
  const { word } = useRouter().query
  const { data, error } = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    fetcher
  )

  const mdDown = useMediaQuery(useTheme().breakpoints.down('md'))

  if (error)
    return (
      <Layout>
        <Head>
          <title>{word} | Kotoba Online Dictionary</title>
          <meta name='description' content='Kotoba online dictionary' />
        </Head>
        <MainContainer
          sx={{
            display: 'flex',
          }}>
          <Stack
            sx={{ width: '100%' }}
            alignItems='center'
            justifyContent='center'
            mb={12}>
            <Typography gutterBottom variant='h3' textAlign='center'>
              Couldn&apos;t find &Prime;<Code>{word}</Code>&Prime;
            </Typography>
            <Typography>Possible problems:</Typography>
            <ul>
              <li>
                <Typography>
                  Word does not exist or isn&apos;t available in database
                </Typography>
              </li>
              <li>
                <Typography>Internet connection error</Typography>
              </li>
            </ul>
          </Stack>
        </MainContainer>
      </Layout>
    )

  if (!data)
    return (
      <Layout>
        <Head>
          <title>{word} | Kotoba Online Dictionary</title>
          <meta name='description' content='Kotoba online dictionary' />
        </Head>
        <MainContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Stack spacing={1} justifyContent='flex-end'>
                <Skeleton variant='text' animation='wave' width='100%' />
                <Skeleton variant='text' animation='wave' width='80%' />
                <Skeleton variant='text' animation='wave' width='50%' />
                <Skeleton variant='text' animation='wave' width='90%' />
              </Stack>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack spacing={3}>
                <WordSkeleton />
                <WordSkeleton />
              </Stack>
            </Grid>
          </Grid>
        </MainContainer>
      </Layout>
    )

  return (
    <Layout>
      <Head>
        <title>{word} | Kotoba Online Dictionary</title>
        <meta name='description' content='Kotoba online dictionary' />
      </Head>
      <MainContainer>
        <Grid container spacing={{ xs: 3, sm: 6 }}>
          <Grid item xs={12} md='auto'>
            <Box>
              <PhoneticsAndSounds data={data} />
              {!mdDown && <SynsAndAnts data={data} />}
            </Box>
          </Grid>
          <Grid item xs={12} md>
            {(data as WordType[]).map((itm, idx) => (
              <Word
                key={idx}
                word={itm.word}
                phonetics={itm.phonetics}
                meanings={itm.meanings}
              />
            ))}

            {mdDown && <SynsAndAnts data={data} />}
          </Grid>
        </Grid>
      </MainContainer>
    </Layout>
  )
}

const MainContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  marginTop: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
  },
}))

const Code = styled('code')(({ theme }) => ({
  color: theme.palette.secondary.dark,
}))

export default WordPage
