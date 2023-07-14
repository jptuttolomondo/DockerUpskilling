const express = require("express");
const morgan = require("morgan");
const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes"));
//server.use("/characters", router);

server.use("*", (req, res) => {
  res.status(404).send("Error 404: no existe la ruta solicitada");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});



module.exports = server;
