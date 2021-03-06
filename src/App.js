import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.js';
import StyledApp from './StyledApp.js';
import Home from '../src/components/pages/Home/Home.js';
import LogSign from 'templates/LogSign/LogSign.js';
import Header from 'templates/Header/Header.js';
import Footer from 'templates/Footer/Footer.js';

const App = () => {
  return (
    <div>
    <GlobalStyle />
      <Header />
      <Home />
      <LogSign />
      <Footer />
      </div>
  )
};

export default App
