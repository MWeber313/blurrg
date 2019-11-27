const express = require('express');
const graphqlHTTP = require('express-graphql');
const playground = require('graphql-playground-middleware-express').default;

const middleware = require('./middleware/global');
const schema = require('./graphql/schema');

const server = express();

middleware(server);

server.get('/playground', playground({ endpoint: '/graphql' }));

server.get('/', (req, res) =>
  res.status(200).json({ everyone: 'good news there is' })
);

server.use('/graphql', graphqlHTTP({ schema, graphiql: false }));

module.exports = server;
