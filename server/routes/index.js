const router = require('express').Router()
const UserController = require('../controllers/UserController')
const RestaurantController = require('../controllers/restaurantController')
const imgController = require('../controllers/imgController')

const recipeRoutes = require('./recipeRouter')

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/signout', UserController.signout)
router.get('/findOne', UserController.findOne)
router.post('/googleSignin', UserController.googleSignin)
router.get('/restaurants/city', RestaurantController.showCity)
router.get('/restaurants/search', RestaurantController.searchRestaurant)
router.get('/img/random', imgController.randomPic)

router.use('/recipes', recipeRoutes)

module.exports = router