import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowClients from '../../components/ShowClients';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 18% 16% 16% 16% 16% 16%;
  margin: 10px 0;
  font-size: 1.3rem;
  color: ${colors.primary};
  font-family: 'font2';
  font-weight: bold;
`;

const ListClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    axios
      .get('http://localhost:3003/clients')
      .then((res) => setClients(res.data));
  };

  return (
    <div className="container">
      <h1>Listes des clients</h1>
      <ul>
        <StyledLi>
          <span>Nom</span>
          <span>Prenom</span>
          <span>Adresse</span>
          <span>Numero CIN</span>
          <span>Téléphone</span>
          <span>Action</span>
        </StyledLi>
        {clients
          .sort((a, b) => b.id - a.id)
          .map((client) => (
            <ShowClients key={client.id} client={client} />
          ))}
      </ul>
    </div>
  );
};

export default ListClients;
