import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import colors from './utils/styles/colors';
import FontStyles from './utils/styles/fonts';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'font1';
  }
  h1 {
    color: ${colors.primary};
    font-family: 'font2';
    text-align: center;
    text-transform: uppercase;
    border: 1px solid ${colors.secondary};
    background-color: ${colors.secondary};
    border-radius: 10px;
}
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <FontStyles />
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listes_reservations" element={<Reservation />} />
    </Routes>
  </BrowserRouter>
);
