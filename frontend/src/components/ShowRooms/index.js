import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import DeleteRoom from '../DeleteRoom';
import EditRoom from '../EditRoom';

const StyledLi = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 30% 40% 1306%;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

const ShowRooms = ({ room }) => {
  return (
    <div>
      <StyledLi>
        <span>{room.number}</span>
        <span>{room.price} Ar</span>
        <span>
          <EditRoom id={room._id} /> <DeleteRoom id={room._id} />
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowRooms;
