import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

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

const EditRoom = ({ id }) => {
  const navigate = useNavigate();

  const routeChange = (id) => {
    const path = '/update-room/' + id;

    navigate(path);
  };

  return <StyledButton onClick={() => routeChange(id)}>Editer</StyledButton>;
};

export default EditRoom;
