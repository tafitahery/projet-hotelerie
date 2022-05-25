import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import EditClient from '../EditClient';
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
        <span>{client.lastName}</span>
        <span>{client.firstName}</span>
        <span>{client.address}</span>
        <span>{client.cin}</span>
        <span>{client.phone}</span>
        <span>
          <EditClient id={client._id} /> <DeleteClient id={client._id} />
        </span>
      </StyledLi>
    </div>
  );
};

export default ShowClient;
