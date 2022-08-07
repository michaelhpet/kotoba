import { Stack, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import BrandHero from '../components/BrandHero'
import Layout from '../components/Layout'
import SearchBox from '../components/SearchBox'

const Home: NextPage = () => {
  const smUp = useMediaQuery(useTheme().breakpoints.up('sm'))

  return (
    <Layout index>
      <Stack mb={12}>
        {!smUp && <BrandHero />}

        {smUp && <SearchBox magnitude='large' />}
      </Stack>
    </Layout>
  )
}

export default Home
