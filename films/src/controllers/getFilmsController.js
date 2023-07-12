const Film = require("../data");
module.exports = async (req, res) => {
  const film = await Film.list();
  res.status(200).json(film);
};