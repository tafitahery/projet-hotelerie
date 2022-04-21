import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditReservation = ({ id }) => {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = '/update-reservations/' + id;
    navigate(path);
  };

  return <button onClick={() => routeChange()}>Editer</button>;
};

export default EditReservation;
