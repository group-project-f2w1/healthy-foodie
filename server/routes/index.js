const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/signout', UserController.signout)
router.post('/googleSignin', UserController.googleSignin)


module.exports = router