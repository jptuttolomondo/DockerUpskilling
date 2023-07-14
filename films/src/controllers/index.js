const { catchedAsync } = require("../utils");
module.exports = {
    getFilms: catchedAsync(require("./getFilmsController.js")),
    postFilm: catchedAsync(require("./postFilmController.js")),
  };
  