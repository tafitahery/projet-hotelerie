const mongoose = require('mongoose');

const roomModel = mongoose.Schema({
  number: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Room', roomModel);
