import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoClient from '../../components/InfoClient';

const CreateClient = () => {
  const [client, setClients] = useState({});
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [cin, setCin] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    getClient();
  }, [nom]);

  const getClient = () => {
    axios
      .get('http://localhost:3003/clients')
      .then((res) => setClients(res.data[res.data.length - 1]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5500/api/client', {
        nom,
        prenom,
        adresse,
        cin,
        telephone,
      })
      .then(() => {
        setNom('');
        setPrenom('');
        setAdresse('');
        setCin('');
        setTelephone('');
      });
  };

  return (
    <div className="container">
      <h1>Création Client</h1>
      <div className="sub">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="nom-client">Nom du client : </label>
            <input
              onChange={(e) => setNom(e.target.value)}
              type="text"
              id="nom-client"
              placeholder="Nom"
              value={nom}
            />
          </div>
          <div className="input">
            <label htmlFor="prenom-client">Prénom du client : </label>
            <input
              onChange={(e) => setPrenom(e.target.value)}
              type="text"
              id="prenom-client"
              placeholder="Prénom"
              value={prenom}
            />
          </div>
          <div className="input">
            <label htmlFor="adresse-client">Adresse du client : </label>
            <input
              onChange={(e) => setAdresse(e.target.value)}
              type="text"
              id="adresse-client"
              placeholder="Adresse"
              value={adresse}
            />
          </div>
          <div className="input">
            <label htmlFor="cin-client">CIN du client : </label>
            <input
              onChange={(e) => setCin(e.target.value)}
              type="text"
              id="cin-client"
              placeholder="Numero CIN"
              value={cin}
            />
          </div>
          <div className="input">
            <label htmlFor="phone-client">Téléphone du client : </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              type="text"
              id="phone-client"
              placeholder="Numero de téléphone"
              value={telephone}
            />
          </div>

          <div className="input">
            <input type="submit" value="Valider" className="btn-valider" />
          </div>
        </form>

        <div className="informations">
          <h2>Dernier enregistrement</h2>
          <InfoClient client={client} />
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
