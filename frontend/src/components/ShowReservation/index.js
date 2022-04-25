import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import EditReservation from '../EditReservation';
import axios from 'axios';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 15% 14% 14% 14% 14% 14% 15%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const ShowReservation = ({ reservation }) => {
  const [client, setClient] = useState([]);
  const [room, setRoom] = useState([]);

  useEffect(() => {
    getClient();
    getRoom();
  }, []);

  const calculDate = () => {
    return Math.round(
      (new Date(reservation.sortie).getTime() -
        new Date(reservation.entree).getTime()) /
        (1000 * 3600 * 24)
    );
  };

  const calculatePrice = () => {
    return String(calculDate() * room.prix);
  };

  const getClient = () => {
    axios
      .get('http://localhost:3003/clients?id=' + reservation.clientId)
      .then((res) => setClient(res.data[0]));
  };

  const getRoom = () => {
    axios
      .get('http://localhost:3003/chambres?id=' + reservation.chambreId)
      .then((res) => setRoom(res.data[0]));
  };

  return (
    <StyledLi>
      <span>
        {client.prenom} <br /> {client.nom}
      </span>
      <span>{room.numero}</span>
      <span>{reservation.entree}</span>
      <span>{reservation.sortie}</span>
      <span>{calculDate()}</span>
      <span>{calculatePrice()}</span>
      <span>
        <EditReservation id={reservation.id} /> <button>Supprimer</button>{' '}
        <br />
        <button>Facturer</button>
      </span>
    </StyledLi>
  );
};

export default ShowReservation;
