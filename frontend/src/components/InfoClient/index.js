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
  return client ? (
    <StyledUl>
      <StyledLi>Nom : {client.lastName}</StyledLi>
      <StyledLi>Prénom : {client.firstName}</StyledLi>
      <StyledLi>Adresse : {client.address}</StyledLi>
      <StyledLi>CIN : {client.cin}</StyledLi>
      <StyledLi>Téléphone : {client.phone}</StyledLi>
    </StyledUl>
  ) : (
    <StyledUl>
      <StyledLi>Nom : </StyledLi>
      <StyledLi>Prénom : </StyledLi>
      <StyledLi>Adresse : </StyledLi>
      <StyledLi>CIN : </StyledLi>
      <StyledLi>Téléphone : </StyledLi>
    </StyledUl>
  );
};

export default InfoClient;
