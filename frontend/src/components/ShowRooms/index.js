import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import DeleteRoom from '../DeleteRoom';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 30% 40% 1306%;
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

const ShowRooms = ({ room }) => {
  return (
    <div>
      <StyledLi>
        <span>{room.numero}</span>
        <span>{room.prix} Ar</span>
        <span>
          <StyledButton>Editer</StyledButton> <DeleteRoom id={room.id} />
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowRooms;
