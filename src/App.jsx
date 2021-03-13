import { Element } from 'react-scroll';

import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b245e'
    },
    secondary: {
      main: '#f9f6eb'
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Element name='me'>
          <Header />
        </Element>
        <Element name='about'>
          <About />
        </Element>
        <Element name='portfolio'>
          <div style={{ minHeight: 400 }}>

          </div>
        </Element>
        <Element name='education'>
          <div style={{ minHeight: 400 }}>

          </div>
        </Element>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
