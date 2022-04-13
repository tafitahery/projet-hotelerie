import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoRoom from '../../components/InfoRoom';

const CreateRoom = () => {
  const [room, setRoom] = useState({});
  const [numero, setNumero] = useState('');
  const [prix, setPrix] = useState(0);

  useEffect(() => {
    getRooms();
  }, [numero]);

  const getRooms = () => {
    axios
      .get('http://localhost:3003/chambres')
      .then((res) => setRoom(res.data[res.data.length - 1]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3003/chambres', {
        numero,
        prix,
      })
      .then(() => {
        setNumero('');
        setPrix(0);
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
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
              type="text"
              id="num-chamber"
              placeholder="Numero / nom chambre"
            />
          </div>
          <div className="input">
            <label htmlFor="prix-chamber">Prix nuitée : </label>
            <input
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
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
