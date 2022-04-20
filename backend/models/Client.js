const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  cin: { type: String, required: true },
  telephone: { type: String, required: true },
});

module.exports = mongoose.model('Client', clientSchema);
