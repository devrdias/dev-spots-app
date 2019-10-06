const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

app.post('/users', SessionController.store);

module.exports = routes;
