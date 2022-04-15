import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [clientId, setClientId] = useState(0);
  const [roomId, setRoomId] = useState(0);
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');

  const navigate = useNavigate();

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

  const routeChange = () => {
    const path = '/facturation';

    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3003/reservations', {
      clientId,
      chambreId: roomId,
      entree: dateIn,
      sortie: dateOut,
    });

    routeChange();
  };

  return (
    <div className="container">
      <h1>Réservation</h1>
      <div className="sub">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="date_entree">Date entrée : </label>
            <input
              onChange={(e) => setDateIn(e.target.value)}
              type="date"
              id="date_entree"
            />
          </div>
          <div className="input">
            <label htmlFor="date_sortie">Date sortie : </label>
            <input
              onChange={(e) => setDateOut(e.target.value)}
              type="date"
              id="date_sortie"
            />
          </div>
          <div className="input">
            <label htmlFor="nom_client">Nom du Client : </label>
            <select
              onChange={(e) => setClientId(e.target.value)}
              id="nom_client"
            >
              <option value=""> --- </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.nom} {client.prenom}
                </option>
              ))}
            </select>
          </div>
          <div className="input">
            <label htmlFor="nom_chambre">Chambre : </label>
            <select
              onChange={(e) => setRoomId(e.target.value)}
              id="nom_chambre"
            >
              <option value=""> --- </option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
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
