import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Validé');
};

const Home = () => {
  return (
    <div className="container">
      <h1>Réservation</h1>
      <div className="sub">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="date_entree">Date entrée : </label>
            <input type="date" id="date_entree" />
          </div>
          <div className="input">
            <label htmlFor="date_sortie">Date sortied : </label>
            <input type="date" id="date_sortie" />
          </div>
          <div className="input">
            <label htmlFor="nom_client">Nom du Client : </label>
            <select id="nom_client">
              <option value=""> --- </option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="nom_chambre">Chambre : </label>
            <select id="nom_chambre">
              <option value=""> --- </option>
            </select>
          </div>
          <div className="input">
            <input type="submit" value="Valider" />
          </div>
        </form>

        <div className="informations">
          <h2>Dernier enregistrement</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
