import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShowReservation from '../../components/ShowReservation';
import colors from '../../utils/styles/colors';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 15% 14% 14% 14% 14% 14% 15%;
  margin: 10px 0;
  font-size: 1.3rem;
  color: ${colors.primary};
  font-family: 'font2';
  font-weight: bold;
`;

const Reservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = () => {
    axios
      .get('http://localhost:3003/reservations')
      .then((res) => setReservations(res.data));
  };
  return (
    <div className="container">
      <h1>Listes des réservations</h1>
      <ul>
        <StyledLi>
          <span>Client</span>
          <span>Chambre</span>
          <span>Date entrée</span>
          <span>Date sortie</span>
          <span>Sejour</span>
          <span>Prix</span>
          <span>Action</span>
        </StyledLi>
        {reservations.map((reservation) => (
          <ShowReservation key={reservation.id} reservation={reservation} />
        ))}
      </ul>
    </div>
  );
};

export default Reservation;
