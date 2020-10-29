const router = require('express').Router()
const zomatoController = require('../controllers/zomatoControllers')


router.get('/city', zomatoController.showCity)
router.get('/search', zomatoController.searchRestaurant)

module.exports = router

