import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import Home from 'pages/home';

require('typeface-roboto');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
