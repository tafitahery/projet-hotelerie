import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import EditReservation from '../EditReservation';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 15% 14% 14% 14% 14% 14% 15%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const ShowReservation = ({ reservation, clients, rooms }) => {
  const [client, setClient] = useState({});

  useEffect(() => {
    getClient();
  }, []);

  const calculDate = () => {
    return Math.round(
      (new Date(reservation.sortie).getTime() -
        new Date(reservation.entree).getTime()) /
        (1000 * 3600 * 24)
    );
  };

  const calculatePrice = () => {};

  const getClient = () => {
    for (const client of clients) {
      if (parseInt(reservation.clientId) === client.id) {
        setClient(client);
      }
    }
  };

  const getRoom = () => {
    for (const room of rooms) {
      if (parseInt(reservation.chambreId) === room.id) {
        return room.numero;
      }
    }
  };

  return (
    <StyledLi>
      <span>
        {client.nom} <br />
        {client.prenom}
      </span>
      <span>{getRoom()}</span>
      <span>{reservation.entree}</span>
      <span>{reservation.sortie}</span>
      <span>{calculDate()}</span>
      <span></span>
      <span>
        <EditReservation id={reservation.id} /> <button>Supprimer</button>{' '}
        <br />
        <button>Facturer</button>
      </span>
    </StyledLi>
  );
};

export default ShowReservation;
