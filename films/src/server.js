const express = require("express");
const morgan = require("morgan");
const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(require("./routes"));
server.use("*", (req, res) => {
    res.status(400).send("No se encuentra");
  });
  
  server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
    });
  });
  
  

module.exports = server;
