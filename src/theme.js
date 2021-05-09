import { createMuiTheme, fade } from '@material-ui/core/styles';
import { lightBlue, deepOrange, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: indigo,
      secondary: deepOrange,
      text: {
        primary: '#59595c',
        secondary: fade('#6d6e70', .8),
      },
      info: {
        light: lightBlue[300],
        main: lightBlue[500],
        dark: lightBlue[800],
        contrastText: '#fff',
      },
      error: {
        light: deepOrange[300],
        main: deepOrange[500],
        dark: deepOrange[700],
        contrastText: '#fff',
      },
    },
  });

  export default theme;
  