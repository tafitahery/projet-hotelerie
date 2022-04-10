import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledUl = styled.ul`
  margin-top: 60px;
`;

const StyledLi = styled.li`
  margin: 20px;
  color: ${colors.secondary};
`;

const InfoClient = ({ client }) => {
  return (
    <StyledUl>
      <StyledLi>Nom : {client.nom}</StyledLi>
      <StyledLi>Prénom : {client.prenom}</StyledLi>
      <StyledLi>Adresse : {client.adresse}</StyledLi>
      <StyledLi>CIN : {client.cin}</StyledLi>
      <StyledLi>Téléphone : {client.telephone}</StyledLi>
    </StyledUl>
  );
};

export default InfoClient;
