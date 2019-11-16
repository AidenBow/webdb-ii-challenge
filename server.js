const express = require('express');

const carRouter = require('./data/carRouter.js');

const server = express();

server.use(express.json());

server.use('/cars', carRouter);

module.exports = server;