const Room = require('../models/Room');

exports.createClient = (req, res, next) => {
  const room = new Room({
    ...req.body,
  });
  room
    .save()
    .then(() => res.status(201).json({ message: 'Chambre enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyClient = (req, res, next) => {
  Room.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Chambre modifié !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteClient = (req, res, next) => {
  Room.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Chambre supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneClient = (req, res, next) => {
  Room.findOne({ _id: req.params.id })
    .then((room) => res.status(200).json(room))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllClient = (req, res, next) => {
  Room.find()
    .then((rooms) => res.status(200).json(rooms))
    .catch((error) => res.status(400).json({ error }));
};
