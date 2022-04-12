import React from 'react';
import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import axios from 'axios';

const StyledButton = styled.button`
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${colors.secondary};
  &: hover {
    cursor: pointer;
    background-color: ${colors.secondary};
    color: ${colors.third};
  }
`;

const DeleteClient = ({ id }) => {
  const handleDelete = () => {
    if (window.confirm('Voulez vous supprimer le client ?')) {
      axios.delete('http://localhost:3003/clients/' + id);
      window.location.reload();
    }
  };

  return <StyledButton onClick={() => handleDelete()}>Supprimer</StyledButton>;
};

export default DeleteClient;
