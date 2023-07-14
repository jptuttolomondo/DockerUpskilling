const { Router } = require("express");
const controllers = require("../controllers");
const { filmsValidation } = require("../middlewares");
const router = Router();
router.get("/films", controllers.getFilms);
router.post("/",filmsValidation,controllers.postFilm);
module.exports = router;
