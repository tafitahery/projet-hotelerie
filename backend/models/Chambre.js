const mongoose = require('mongoose');

const chambreSchema = mongoose.Schema({
  numero: { type: String, required: true },
  prix: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chambre', chambreSchema);
