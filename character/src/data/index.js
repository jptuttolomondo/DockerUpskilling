//const characters = require("./characters.json");
const axios= require('axios') 
module.exports = {
  list: async () => {

    const characters = await axios.get('http://database:8004/Character')
  
    return characters.data;
  },
  create: async () => {
    throw Error("hay un error al crear el personaje, desde el index de data");
  },
};
