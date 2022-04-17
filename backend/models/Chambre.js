const mongoose = require('mongoose');

const chambreSchema = mongoose.Schema({
  numero: { type: String, required: true },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model('Chambre', chambreSchema);
