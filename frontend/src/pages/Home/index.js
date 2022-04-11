import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getClient();
    getRooms();
  }, []);

  const getClient = () => {
    axios
      .get('http://localhost:3003/clients')
      .then((res) => setClients(res.data));
  };
  const getRooms = () => {
    axios
      .get('http://localhost:3003/chambres')
      .then((res) => setRooms(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Validé');
  };

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
              {clients.map((client) => (
                <option key={client.id} value={client}>
                  {client.nom} {client.prenom}
                </option>
              ))}
            </select>
          </div>
          <div className="input">
            <label htmlFor="nom_chambre">Chambre : </label>
            <select id="nom_chambre">
              <option value=""> --- </option>
              {rooms.map((room) => (
                <option key={room.id} value={room}>
                  {room.numero}
                </option>
              ))}
            </select>
          </div>
          <div className="input">
            <input type="submit" value="Valider" className="btn-valider" />
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
