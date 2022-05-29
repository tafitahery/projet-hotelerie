import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoRoom from '../../components/InfoRoom';

const CreateRoom = () => {
  const [room, setRoom] = useState({});
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getRooms();
  }, [number]);

  const getRooms = () => {
    axios
      .get('http://localhost:4500/api/rooms')
      .then((res) => setRoom(res.data[res.data.length - 1]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4500/api/rooms', {
        number,
        price,
      })
      .then(() => {
        setNumber('');
        setPrice(0);
      });
  };

  return (
    <div className="container">
      <h1>Création chambre</h1>
      <div className="sub">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="num-chamber">Numero chambre : </label>
            <input
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              type="text"
              id="num-chamber"
              placeholder="Numero / nom chambre"
            />
          </div>
          <div className="input">
            <label htmlFor="prix-chamber">Prix nuitée : </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              id="prix-chamber"
              placeholder="Prix nuité"
            />
          </div>

          <div className="input">
            <input type="submit" value="Valider" className="btn-valider" />
          </div>
        </form>

        <div className="informations">
          <h2>Dernier enregistrement</h2>
          <InfoRoom room={room} />
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
