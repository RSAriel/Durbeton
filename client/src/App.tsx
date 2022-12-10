import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Home } from './pages';
import { Navbar } from './pages';
import { Services } from './pages';
import { Footer } from './pages/footer';
import { Form } from './pages/form';
import { Header } from './pages/header';
import { Cases } from './pages/cases';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Header/>
      <Services/>
      <Cases/>
      <Form/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
