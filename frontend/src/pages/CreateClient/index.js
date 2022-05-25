import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoClient from '../../components/InfoClient';

const CreateClient = () => {
  const [client, setClients] = useState({});
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [cin, setCin] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getClient();
  }, [lastName]);

  const getClient = () => {
    axios
      .get('http://localhost:4500/api/clients')
      .then((res) => setClients(res.data[res.data.length - 1]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4500/api/clients', {
        lastName,
        firstName,
        address,
        cin,
        phone,
      })
      .then(() => {
        setLastName('');
        setFirstName('');
        setAddress('');
        setCin('');
        setPhone('');
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
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="nom-client"
              placeholder="Nom"
              value={lastName}
            />
          </div>
          <div className="input">
            <label htmlFor="prenom-client">Prénom du client : </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="prenom-client"
              placeholder="Prénom"
              value={firstName}
            />
          </div>
          <div className="input">
            <label htmlFor="adresse-client">Adresse du client : </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="adresse-client"
              placeholder="Adresse"
              value={address}
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
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="phone-client"
              placeholder="Numero de téléphone"
              value={phone}
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
