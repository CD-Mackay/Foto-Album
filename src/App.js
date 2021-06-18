import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.js';
import StyledApp from './StyledApp.js';
import Home from '../src/components/pages/Home/Home.js';
import Header from 'templates/Header/Header.js';
import Footer from 'templates/Footer/Footer.js';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Home />
      <Footer />
      </StyledApp>
  )
}

export default App
