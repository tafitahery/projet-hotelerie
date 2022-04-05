import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listes_reservations" element={<Reservation />} />
    </Routes>
  </BrowserRouter>
);
