import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const ShowReservation = ({ reservation, clients, rooms }) => {
  const getClient = () => {
    for (const client of clients) {
      if (parseInt(reservation.clientId) === client.id) {
        return client.nom + ' ' + client.prenom;
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
      <span>{getClient()}</span>
      <span>{getRoom()}</span>
      <span>{reservation.entree}</span>
      <span>{reservation.sortie}</span>
      <span>
        <button>Editer</button> <button>Supprimer</button>{' '}
        <button>Facturer</button>
      </span>
    </StyledLi>
  );
};

export default ShowReservation;
