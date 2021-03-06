import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation';
import Header from './components/Header';
import GlobalStyle from './utils/styles/globalStyle';
import FontStyles from './utils/styles/fonts';
import CreateClient from './pages/CreateClient';
import ListClients from './pages/ListClients';
import CreateRoom from './pages/CreateRoom';
import ListRooms from './pages/ListRooms';
import UpdateClient from './pages/UpdateClient';
import UpdateRoom from './pages/UpdateRoom';
import Facturation from './pages/Facturation';
import UpdateReservation from './pages/UpdateReservation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FontStyles />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listes-reservations" element={<Reservation />} />
        <Route
          path="/update-reservations/:id"
          element={<UpdateReservation />}
        />
        <Route path="/creation-client" element={<CreateClient />} />
        <Route path="/liste-clients" element={<ListClients />} />
        <Route path="/update-client/:id" element={<UpdateClient />} />
        <Route path="/creation-room" element={<CreateRoom />} />
        <Route path="/liste-room" element={<ListRooms />} />
        <Route path="/update-room/:id" element={<UpdateRoom />} />
        <Route path="/facturation" element={<Facturation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
