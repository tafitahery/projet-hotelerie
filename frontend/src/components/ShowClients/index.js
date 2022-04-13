import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import ButtonUpdateClient from '../ButtonUpdateClient';
import DeleteClient from '../DeleteClient';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 18% 16% 16% 16% 16% 16%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const ShowClient = ({ client }) => {
  return (
    <div>
      <StyledLi>
        <span>{client.nom}</span>
        <span>{client.prenom}</span>
        <span>{client.adresse}</span>
        <span>{client.cin}</span>
        <span>{client.telephone}</span>
        <span>
          <ButtonUpdateClient client={client} /> <DeleteClient id={client.id} />
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowClient;
