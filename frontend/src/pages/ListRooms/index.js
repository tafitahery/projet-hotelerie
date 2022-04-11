import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShowRooms from '../../components/ShowRooms';
import colors from '../../utils/styles/colors';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  margin: 10px 0;
  font-size: 1.3rem;
  color: ${colors.primary};
  font-family: 'font2';
  font-weight: bold;
`;

const ListRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    axios
      .get('http://localhost:3003/chambres')
      .then((res) => setRooms(res.data));
  };

  return (
    <div className="container">
      <h1>Listes des chambres</h1>
      <ul>
        <StyledLi>
          <span>Numero / Nom de chambre</span>
          <span>Prix / nuitée</span>
          <span>Action</span>
        </StyledLi>
        {rooms
          .sort((a, b) => b.id - a.id)
          .map((room) => (
            <ShowRooms key={room.id} room={room} />
          ))}
      </ul>
    </div>
  );
};

export default ListRooms;
