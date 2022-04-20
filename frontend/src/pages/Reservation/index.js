import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = () => {
    axios
      .get('http://localhost:3003/reservations')
      .then((res) => setReservations(res.data));
  };

  return (
    <div className="container">
      <h1>Listes des réservations</h1>
    </div>
  );
};

export default Reservation;
