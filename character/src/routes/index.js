const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
router.get("/characters", controllers.getCharacters);
router.post("/", controllers.postCharacter);
module.exports = router;
