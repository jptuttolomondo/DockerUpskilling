const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
router.get("/films", controllers.getFilms);
router.post("/", controllers.postFilm);
module.exports = router;
