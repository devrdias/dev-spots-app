const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotsController = require('./controllers/SpotsController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', SessionController.store);

module.exports = routes;
