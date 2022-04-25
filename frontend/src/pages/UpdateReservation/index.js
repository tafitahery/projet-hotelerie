import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateReservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = () => {
    axios
      .get('http://localhost:3003/reservations?id=' + id)
      .then((res) => setReservation(res.data[0]));
  };

  return (
    <div className="container">
      <h1>Réservation</h1>
      <div className="sub">
        <form>
          <div className="input">
            <label htmlFor="date_entree">Date entrée : </label>
            <input
              defaultValue={reservation.entree}
              type="date"
              id="date_entree"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="date_sortie">Date sortie : </label>
            <input
              defaultValue={reservation.sortie}
              type="date"
              id="date_sortie"
              required
            />
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
