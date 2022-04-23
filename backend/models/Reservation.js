const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  chambreId: { type: String, required: true },
  clientId: { type: String, required: true },
  entree: { type: String, required: true },
  sortie: { type: String, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);