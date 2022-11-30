const express = require('express');

const personagem = require('./controllers/personagem.controller');
const episodio = require('./controllers/episodio.controller');

const app = express();

app.use(express.json());

app.get('/personagem', personagem.getAll);
app.get('/episodio', episodio.getAll);

module.exports = app;
