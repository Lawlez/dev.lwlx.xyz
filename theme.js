import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#f07693',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {},
  },
  components: {
    overrides: {
      Container: {
        background: '#141414',
      },
    },
  },
})


export default theme
