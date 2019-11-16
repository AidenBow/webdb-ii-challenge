const express = require('express');

const carRouter = require('./data/carRouter.js');

const server = express();

server.use(express.json());

server.use('/data/cars', carRouter);

module.exports = server;