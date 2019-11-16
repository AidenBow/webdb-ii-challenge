const express = require('express');

const carRouter = require("./data/carRouter.js");
const saleRouter = require("./data/saleRouter")

const server = express();

server.use(express.json());

server.use("/data/cars", carRouter);
server.use("/data/sales", saleRouter)

module.exports = server;