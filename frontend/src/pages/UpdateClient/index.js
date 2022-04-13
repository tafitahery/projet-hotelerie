import { useParams } from 'react-router-dom';

const UpdateClient = () => {
  const client = useParams();

  return (
    <div className="container">
      <h1>Modification Client</h1>
      <div className="sub">
        <form>
          <div className="input">
            <label htmlFor="nom-client">Nom du client : </label>
            <input type="text" id="nom-client" placeholder="Nom" />
          </div>
          <div className="input">
            <label htmlFor="prenom-client">Prénom du client : </label>
            <input type="text" id="prenom-client" placeholder="Prénom" />
          </div>
          <div className="input">
            <label htmlFor="adresse-client">Adresse du client : </label>
            <input type="text" id="adresse-client" placeholder="Adresse" />
          </div>
          <div className="input">
            <label htmlFor="cin-client">CIN du client : </label>
            <input type="text" id="cin-client" placeholder="Numero CIN" />
          </div>
          <div className="input">
            <label htmlFor="phone-client">Téléphone du client : </label>
            <input
              type="text"
              id="phone-client"
              placeholder="Numero de téléphone"
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
