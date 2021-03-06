import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [editedNom, setEditedNom] = useState('');
  const [editedPrenom, setEditedPrenom] = useState('');
  const [editdeAdresse, setEditedAdresse] = useState('');
  const [editedCin, setEditedCin] = useState('');
  const [editedTelephone, setEditedTelephone] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    axios.get('http://localhost:4500/api/clients').then((res) =>
      setClient(
        res.data.reduce((acc, elt) => (elt._id === id ? (acc = elt) : acc)),
        {}
      )
    );
  };

  const routeChange = () => {
    let path = '/liste-clients';
    navigate(path);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put('http://localhost:4500/api/clients/' + id, {
      lastName: editedNom ? editedNom : client.lastName,
      firstName: editedPrenom ? editedPrenom : client.firstName,
      address: editdeAdresse ? editdeAdresse : client.address,
      cin: editedCin ? editedCin : client.cin,
      phone: editedTelephone ? editedTelephone : client.phone,
    });

    routeChange();
  };

  return (
    <div className="container">
      <h1>Modification Client</h1>
      <div className="sub">
        <form onSubmit={(e) => handleUpdate(e)}>
          <div className="input">
            <label htmlFor="nom-client">Nom du client : </label>
            <input
              type="text"
              id="nom-client"
              placeholder="Nom"
              defaultValue={client.lastName}
              onChange={(e) => setEditedNom(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="prenom-client">Prénom du client : </label>
            <input
              type="text"
              id="prenom-client"
              placeholder="Prénom"
              defaultValue={client.firstName}
              onChange={(e) => setEditedPrenom(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="adresse-client">Adresse du client : </label>
            <input
              type="text"
              id="adresse-client"
              placeholder="Adresse"
              defaultValue={client.address}
              onChange={(e) => setEditedAdresse(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="cin-client">CIN du client : </label>
            <input
              type="text"
              id="cin-client"
              placeholder="Numero CIN"
              defaultValue={client.cin}
              onChange={(e) => setEditedCin(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="phone-client">Téléphone du client : </label>
            <input
              type="text"
              id="phone-client"
              placeholder="Numero de téléphone"
              defaultValue={client.phone}
              onChange={(e) => setEditedTelephone(e.target.value)}
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

export default UpdateClient;
