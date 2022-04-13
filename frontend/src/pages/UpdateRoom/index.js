import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({});
  const [editedNumero, setEditedNumero] = useState('');
  const [editedPrix, setEditedPrix] = useState(0);

  useEffect(() => {
    getRoom();
  }, []);

  const getRoom = () => {
    axios.get('http://localhost:3003/chambres').then((res) =>
      setRoom(
        res.data.reduce((acc, elt) =>
          elt.id === parseInt(id) ? (acc = elt) : acc
        ),
        {}
      )
    );
  };

  const routeChange = () => {
    const path = '/liste-room';

    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:3003/chambres/' + id, {
      numero: editedNumero ? editedNumero : room.numero,
      prix: editedPrix ? editedPrix : room.prix,
    });

    routeChange();
  };

  return (
    <div className="container">
      <h1>Modification chambre</h1>
      <div className="sub">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="num-chamber">Numero chambre : </label>
            <input
              defaultValue={room.numero}
              onChange={(e) => setEditedNumero(e.target.value)}
              type="text"
              id="num-chamber"
              placeholder="Numero / nom chambre"
            />
          </div>
          <div className="input">
            <label htmlFor="prix-chamber">Prix nuitée : </label>
            <input
              defaultValue={room.prix}
              onChange={(e) => setEditedPrix(e.target.value)}
              type="number"
              id="prix-chamber"
              placeholder="Prix nuité"
            />
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

export default UpdateRoom;
