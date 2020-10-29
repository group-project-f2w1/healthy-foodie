const router = require('express').Router()
const restaurantController = require('../controllers/restaurantController')


router.get('/city', restaurantController.showCity)
router.get('/search', restaurantController.searchRestaurant)

module.exports = router

