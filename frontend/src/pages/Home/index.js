import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Réservation</h1>
      <form action="">
        <div>
          <label htmlFor="date_entree">Date entrée : </label>
          <input type="date" id="date_entree" />
        </div>
        <div>
          <label htmlFor="date_sortie">Date sortied : </label>
          <input type="date" id="date_sortie" />
        </div>
        <div>
          <label htmlFor="nom_client">Nom du Client : </label>
          <select id="nom_client">
            <option value=""> --- </option>
          </select>
        </div>
        <div>
          <label htmlFor="nom_chambre">Chambre : </label>
          <select id="nom_chambre">
            <option value=""> --- </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Home;
