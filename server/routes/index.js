const router = require('express').Router()
const UserController = require('../controllers/UserController')
const RestaurantController = require('../controllers/restaurantController')
const imgController = require('../controllers/imgController')

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/signout', UserController.signout)
router.post('/googleSignin', UserController.googleSignin)
router.get('/restaurants/city', RestaurantController.showCity)
router.get('/restaurants/search', RestaurantController.searchRestaurant)
router.get('/img/random', imgController.randomPic)


module.exports = router