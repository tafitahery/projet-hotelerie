import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateReservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState({});
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [defaultClient, setDefaultClient] = useState({});
  const [defaultRoom, setDefaultRoom] = useState({});

  useEffect(() => {
    getReservation();
    getClients();
    getRooms();
    getDefaultClients();
    getDefaultRoom();
  }, []);

  const getReservation = () => {
    axios
      .get('http://localhost:3003/reservations?id=' + id)
      .then((res) => setReservation(res.data[0]));
  };

  const getClients = () => {
    axios
      .get('http://localhost:3003/clients')
      .then((res) => setClients(res.data));
  };

  const getDefaultClients = () => {
    setDefaultClient(
      clients.reduce(
        (acc, elt) => (elt.id === parseInt(reservation.clientId) ? elt : acc),
        {}
      )
    );
  };

  const getDefaultRoom = () => {
    setDefaultRoom(
      rooms.reduce(
        (acc, elt) => (elt.id === parseInt(reservation.chambreId) ? elt : acc),
        {}
      )
    );
  };

  const getRooms = () => {
    axios
      .get('http://localhost:3003/chambres')
      .then((res) => setRooms(res.data));
  };

  console.log(defaultClient);

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
            <select defaultValue={defaultClient.id} id="nom_client" required>
              <option value=""> --- </option>
              {clients.map((client) => (
                <option value={client.id} key={client.id}>
                  {client.nom} {client.prenom}
                </option>
              ))}
            </select>
          </div>
          <div className="input">
            <label htmlFor="nom_chambre">Chambre : </label>
            <select id="nom_chambre" required>
              <option value=""> --- </option>
              {rooms.map((room) => (
                <option value={room.id} key={room.id}></option>
              ))}
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
