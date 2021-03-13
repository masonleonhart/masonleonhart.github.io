import { Element } from 'react-scroll';

import Nav from './Components/Nav/Nav';
import ComponentOne from './Components/ComponentOne/ComponentOne';
import ComponentTwo from './Components/ComponentTwo/ComponentTwo';
import Footer from './Components/Footer/Footer';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#186327'
    }
  }
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Nav />
          <Element name='one'>
            <ComponentOne />
          </Element>
          <Element name='two'>
            <ComponentTwo />
          </Element>
          <Footer />
        </div>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
