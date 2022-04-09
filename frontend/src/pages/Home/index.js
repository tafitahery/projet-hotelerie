import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const StyledContainer = styled.div`
  margin-top: 50px;
  border: 1px solid ${colors.secondary};
  border-radius: 10px;
`;

const StyledForm = styled.form`
  margin: 20px;
`;

const StyledLabel = styled.label`
  color: ${colors.primary};
  font-size: 1.3rem;
`;

const Home = () => {
  return (
    <StyledContainer>
      <h1>Réservation</h1>
      <StyledForm action="">
        <div>
          <StyledLabel htmlFor="date_entree">Date entrée : </StyledLabel>
          <input type="date" id="date_entree" />
        </div>
        <div>
          <StyledLabel htmlFor="date_sortie">Date sortied : </StyledLabel>
          <input type="date" id="date_sortie" />
        </div>
        <div>
          <StyledLabel htmlFor="nom_client">Nom du Client : </StyledLabel>
          <select id="nom_client">
            <option value=""> --- </option>
          </select>
        </div>
        <div>
          <StyledLabel htmlFor="nom_chambre">Chambre : </StyledLabel>
          <select id="nom_chambre">
            <option value=""> --- </option>
          </select>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};

export default Home;
