const express = require("express");
const morgan = require("morgan");
const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(require("./routes"));


server.use("*", (req, res) => {
    res.status(401).send("La ruta no existe.");
  });
  
  server.use((err, req, res, next) => {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  });
  
module.exports = server;
