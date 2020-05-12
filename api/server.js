const express = require('express');

const server = express();

server.use('/', (req, res) => {
  res.send({server: 'up and running'});
});

module.exports = server;
