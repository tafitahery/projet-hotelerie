import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledUl = styled.ul`
  margin-top: 30px;
`;

const StyledLi = styled.li`
  margin: 20px;
  color: ${colors.secondary};
`;

const InfoRoom = ({ room }) => {
  return (
    <StyledUl>
      <StyledLi>Chambre numero {room.number}</StyledLi>
      <StyledLi>{room.price} Ar / nuitée</StyledLi>
    </StyledUl>
  );
};

export default InfoRoom;
