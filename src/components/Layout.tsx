import { Container as MuiContainer, styled } from '@mui/material'
import Footer from './Footer'
import NavBar, { NavProps } from './NavBar'

export default function Layout(props: NavProps) {
  return (
    <Container>
      <NavBar index={props.index} />
      <main>{props.children}</main>
      <Footer />
    </Container>
  )
}

const Container = styled(MuiContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  paddingBottom: theme.spacing(3),
}))
