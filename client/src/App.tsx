import React from "react";
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

  const menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })

  function getScrollTopByHref(element: { getAttribute: (arg0: string) => any; }) {
    const id = element.getAttribute('href');

    return document.querySelector(id).offsetTop;
  }

  function scrollToIdOnClick(event: { preventDefault: () => void; target: any; }) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 115;
    scrollToPosition(to);
  }

  function scrollToPosition(to: number) {
    window.scroll({
      top: to,
      behavior: "smooth",
    });
  }
    
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
