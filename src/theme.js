import { createTheme } from '@mui/material/styles';

const theme = (darkMode ) => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#fff',
        paper: darkMode ? '#1d1d1d' : '#fff',
      },
      text: {
        primary: darkMode ? '#fff' : '#000',
      },
      primary: {
        main: darkMode ? '#bb86fc' : '#3f51b5',
      },
      secondary: {
        main: darkMode ? '#03dac6' : '#f50057',
      },
    },
  });
  
export default theme;
