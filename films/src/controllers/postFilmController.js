const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await Film.create();
  res.status(200).json(films);
};