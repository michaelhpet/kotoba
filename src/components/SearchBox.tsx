import {
  Button as MuiButton,
  InputBase,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useRouter } from 'next/router'
import { FormEventHandler, useEffect, useState } from 'react'
import Brand from './Brand'
import ThemeToggle from './ThemeToggle'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface Props {
  magnitude: 'small' | 'medium' | 'large'
}

interface SearchBoxProps {
  magnitude: 'small' | 'medium' | 'large'
  forNav?: true
}

export default function SearchBox(props: SearchBoxProps) {
  const smDown = useMediaQuery(useTheme().breakpoints.down('sm'))
  const [word, setWord] = useState('')

  const router = useRouter()
  useEffect(() => {
    setWord('')
  }, [router])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (word !== '') {
      router.push(`/${word}`)
    }
  }

  return (
    <Form magnitude={props.magnitude} onSubmit={handleSubmit}>
      {props.forNav && <Brand {...(smDown && { useLetter: true })} />}
      <TextField
        type='search'
        value={word}
        onChange={(e) => setWord(e.target.value)}
        fullWidth
        placeholder='type a word...'
        magnitude={props.magnitude}
        {...(!props.forNav && {
          startAdornment: (
            <SearchRoundedIcon
              sx={(theme) => ({
                fontSize: props.magnitude === 'small' ? 36 : 48,
                color: theme.palette.text.secondary,
              })}
            />
          ),
        })}
      />

      {props.forNav ? (
        <ThemeToggle />
      ) : (
        <Button type='submit' variant='contained' magnitude={props.magnitude}>
          Find
        </Button>
      )}
    </Form>
  )
}

const Form = styled('form', {
  name: 'SearchBox',
  slot: 'root',
  shouldForwardProp: (prop) => prop !== 'magnitude',
})<Props>(({ theme, magnitude }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap:
    magnitude === 'small'
      ? theme.spacing(1)
      : magnitude === 'medium'
      ? theme.spacing(2)
      : theme.spacing(3),
  padding:
    magnitude === 'small'
      ? theme.spacing(1)
      : magnitude === 'medium'
      ? theme.spacing(2)
      : theme.spacing(3),
  paddingLeft:
    magnitude === 'small'
      ? theme.spacing(2)
      : magnitude === 'medium'
      ? theme.spacing(4)
      : theme.spacing(6),
  borderRadius: theme.spacing(10),
  background: theme.palette.background.paper,
}))

const TextField = styled(InputBase, {
  name: 'SearchBox',
  slot: 'TextField',
  shouldForwardProp: (prop) => prop !== 'magnitude',
})<Props>(({ theme, magnitude }) => ({
  fontSize: magnitude === 'small' ? 24 : magnitude === 'medium' ? 36 : 48,
  fontWeight: 'bold',

  '& input[type="search"]::-webkit-search-decoration, & input[type="search"]::-webkit-search-cancel-button, & input[type="search"]::-webkit-search-results-button, & input[type="search"]::-webkit-search-results-decoration':
    {
      WebkitAppearance: 'none',
    },

  '& input.hide-clear[type=search]::-ms-clear, & input.hide-clear[type=search]::-ms-reveal':
    {
      display: 'none',
      width: 0,
      height: 0,
    },

  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}))

const Button = styled(MuiButton, {
  name: 'SearchBox',
  slot: 'Button',
  shouldForwardProp: (prop) => prop !== 'magnitude',
})<Props>(({ theme, magnitude }) => ({
  fontFamily: 'inherit',
  fontSize: magnitude === 'small' ? 24 : magnitude === 'medium' ? 36 : 48,
  fontWeight: 'bold',
  textTransform: 'none',
  color: 'white',
  padding: `${theme.spacing(1)} ${theme.spacing(6)}`,
  borderRadius: theme.spacing(10),
  boxShadow: 'none',
}))
