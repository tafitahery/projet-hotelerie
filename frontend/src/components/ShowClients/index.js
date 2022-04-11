import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

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
  &: hover {
    cursor: pointer;
  }
  ${(props) =>
    props.edit &&
    `color: ${colors.primary};
        &: hover {
          background-color: ${colors.primary};
          color: ${colors.third}
        }`}
  ${(props) =>
    props.del &&
    `color: red;
        &: hover {
          background-color: red;
          color: ${colors.third}
        }`}
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
          <StyledButton del>Supprimer</StyledButton>
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowClient;
