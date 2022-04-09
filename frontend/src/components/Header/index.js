import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledNav = styled.nav`
  background: ${colors.primary};
  padding: 10;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  color: ${colors.third};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Réservation</StyledLink>
      <StyledLink to="/listes_reservations">Listes des réservations</StyledLink>
      <StyledLink to="#">Création client</StyledLink>
      <StyledLink to="#">Listes des clients</StyledLink>
      <StyledLink to="#">Création chambre</StyledLink>
      <StyledLink to="#">Listes des chambres</StyledLink>
    </StyledNav>
  );
};

export default Header;
