import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Réservation</Link>
      <Link to="/listes_reservations">Listes des réservations</Link>
      <Link to="#">Création client</Link>
      <Link to="#">Listes des clients</Link>
      <Link to="#">Création chambre</Link>
      <Link to="#">Listes des chambres</Link>
    </nav>
  );
};

export default Header;
