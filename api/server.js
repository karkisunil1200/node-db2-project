const express = require('express');

const carRouter = require('./car-router');

const helmet = require('helmet');

const server = express();

server.use(helmet());

server.use('/', (req, res) => {
  res.send('<h2>Welcome to your home page</h2>');
});

server.use('/api/cars', carRouter);

module.exports = server;
