const express = require('express');
const middleware = require('./middleware/global');

const server = express();

middleware(server);

server.get('/', (req, res) =>
  res.status(200).json({ everyone: 'good news there is' })
);

module.exports = server;
