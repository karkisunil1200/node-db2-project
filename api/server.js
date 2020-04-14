const express = require('express');
const carRouter = require('../router/car-router');

const server = express();

server.get('/', (req, res) => {
  res.json({server: 'up'});
});

server.use('/api/cars', carRouter);

module.exports = server;
