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
    axios.get('http://localhost:4500/api/rooms').then((res) =>
      setRoom(
        res.data.reduce((acc, elt) => (elt._id === id ? (acc = elt) : acc)),
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

    axios.put('http://localhost:4500/api/rooms/' + id, {
      number: editedNumero ? editedNumero : room.number,
      price: editedPrix ? editedPrix : room.price,
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
              defaultValue={room.number}
              onChange={(e) => setEditedNumero(e.target.value)}
              type="text"
              id="num-chamber"
              placeholder="Numero / nom chambre"
            />
          </div>
          <div className="input">
            <label htmlFor="prix-chamber">Prix nuitée : </label>
            <input
              defaultValue={room.price}
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
