import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Navbar } from './pages';
import { Services } from './pages';
import { Footer } from './pages/footer';

function App() {
  return (
    <html>
      <Navbar/>
      <Services/>
      <Footer/>
    </html>
  );
}

export default App;
