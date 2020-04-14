const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.json({server: 'up'});
});

module.exports = server;
