require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const movieController = require('./controllers/movieController');
const tvController = require('./controllers/tvController');

const PORT = '3001';

app.use(cors());
app.use(bodyParser.json());

app.use('/movies', movieController);

app.use('/tv', tvController);

app.use((err, _req, res, _next) => {
  if (err.response.status) {
    return res.status(err.response.status).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
});

app.all('*', (_req, res) => {
  return res.status(404).json({ message: 'Página não econtrada' });
});

app.listen(PORT, () => console.log(`Rodando na ${PORT}`));
