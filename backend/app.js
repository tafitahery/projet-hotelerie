const express = require('express');
const { default: mongoose } = require('mongoose');

const clientRoutes = require('./routes/client');
const roomRoutes = require('./routes/room');

mongoose
  .connect('mongodb://localhost:27017/hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDb réussie !'))
  .catch(() => console.log('Connexion à MongoDb échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/clients', clientRoutes);
app.use('/api/rooms', roomRoutes);

module.exports = app;
