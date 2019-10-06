const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

app.post('/users', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
