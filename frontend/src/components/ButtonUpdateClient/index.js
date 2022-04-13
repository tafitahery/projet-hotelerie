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

const ButtonUpdateClient = ({ client }) => {
  let navigate = useNavigate();

  const routeChange = (client) => {
    let path = '/update-client/' + client;
    navigate(path);
  };
  return (
    <StyledButton onClick={() => routeChange(JSON.stringify(client))}>
      Editer
    </StyledButton>
  );
};

export default ButtonUpdateClient;
