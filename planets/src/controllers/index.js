const { catchedAsync } = require("../utils");
module.exports={
    getPlanets:catchedAsync (require('./getPlanetsController.js')),
    postPlanet: catchedAsync (require('./postPlanetControllers.js'))
}