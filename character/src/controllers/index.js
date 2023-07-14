const { catchedAsync } = require("../utils");
module.exports = {
  getCharacters: catchedAsync(require("./getCharactersController.js")),
  postCharacter: catchedAsync(require("./postCharacterController.js")),
};
