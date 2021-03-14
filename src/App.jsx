import { Element } from 'react-scroll';

import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f3c78'
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
        <Element name='resume'>
          <Resume />
        </Element>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
