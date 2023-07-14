const Router = require('express')
const router=Router()
const controllers=require('../controllers')
const { planetsValidation } = require("../middlewares");
router.get("/planets",controllers.getPlanets)
router.post("/",planetsValidation,controllers.postPlanet)
module.exports = router