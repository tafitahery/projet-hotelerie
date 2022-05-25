const mongoose = require('mongoose');

const clientShema = mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  address: { type: String, required: true },
  cin: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Client', clientShema);
