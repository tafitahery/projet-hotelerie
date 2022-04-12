import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import DeleteClient from '../DeleteClient';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 18% 16% 16% 16% 16% 16%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${colors.primary};
  &: hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.third};
  }
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
          <StyledButton edit>Editer</StyledButton>{' '}
          <DeleteClient id={client.id} />
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowClient;
