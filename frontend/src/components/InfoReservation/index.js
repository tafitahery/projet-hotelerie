import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  margin-top: 70px;
`;

const InfoReservation = ({ reservations, clients, rooms }) => {
  const reservation = reservations.reduce(
    (acc, elt) => (Math.max(elt.id) ? (acc = elt) : acc),
    {}
  );

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
    <StyledUl>
      <li>Date entrée : {reservation.entree} </li>
      <li>Date sortie : {reservation.sortie} </li>
      <li>Nom Client : {getClient()} </li>
      <li>chambre : {getRoom()} </li>
    </StyledUl>
  );
};

export default InfoReservation;
