import React from 'react';

const UpdateReservation = () => {
  return (
    <div className="container">
      <h1>Réservation</h1>
      <div className="sub">
        <form>
          <div className="input">
            <label htmlFor="date_entree">Date entrée : </label>
            <input type="date" id="date_entree" required />
          </div>
          <div className="input">
            <label htmlFor="date_sortie">Date sortie : </label>
            <input type="date" id="date_sortie" required />
          </div>
          <div className="input">
            <label htmlFor="nom_client">Nom du Client : </label>
            <select id="nom_client" required>
              <option value=""> --- </option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="nom_chambre">Chambre : </label>
            <select id="nom_chambre" required>
              <option value=""> --- </option>
            </select>
          </div>
          <div className="input">
            <input
              type="submit"
              value="Mettre à jour"
              className="btn-valider"
            />
          </div>
        </form>

        <div className="informations">
          <h2>Dernier enregistrement</h2>
        </div>
      </div>
    </div>
  );
};

export default UpdateReservation;
