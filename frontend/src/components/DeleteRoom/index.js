import axios from 'axios';
import React from 'react';
import styledComponents from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledButton = styledComponents.button`
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${colors.secondary};
  &: hover {
    cursor: pointer;
    background-color: ${colors.secondary};
    color: ${colors.third};
  }
`;

const DeleteRoom = ({ id }) => {
  const handleDelete = () => {
    if (window.confirm('Voulez vous supprimer cette chambre ?')) {
      axios.delete('http://localhost:4500/api/rooms/' + id);
      window.location.reload();
    }
  };

  return <StyledButton onClick={() => handleDelete()}>Supprimer</StyledButton>;
};

export default DeleteRoom;
