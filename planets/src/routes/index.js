const Router = require('express')
const router=Router()
const controllers=require('../controllers')
router.get("/planets",controllers.getPlanets)
router.post("/",controllers.postPlanet)
module.exports = router