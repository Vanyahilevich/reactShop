import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    cont: {
      main: "#74C69D",
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  spacing: 8,
});

export default theme;
