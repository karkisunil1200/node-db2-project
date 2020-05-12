const express = require('express');
const carRouter = require('../cars/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up and running'});
});

server.use('/api/cars', carRouter);

module.exports = server;
