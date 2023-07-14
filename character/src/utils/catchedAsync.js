//a estas funciones se las llaman "funciones de orden superior" porque son funciones que reciben una funcion y la retornan la misma funcion recibida como parametro pero modificada
module.exports = (fn) => {
    return function (req, res, next) {
      fn(req, res).catch((err) => next(err));
    };
  };