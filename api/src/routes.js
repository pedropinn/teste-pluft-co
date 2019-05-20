const express = require('express');
const routes = express.Router();
const RestController = require('./controllers/RestController');

routes.get('/restaurants', RestController.index);
routes.get('/restaurants/:id', RestController.show);
routes.post('/restaurants', RestController.store);
routes.put('/restaurants/:id', RestController.update);
routes.delete('/restaurants/:id', RestController.destroy);

module.exports = routes;