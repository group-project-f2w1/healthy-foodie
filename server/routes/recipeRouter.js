const router = require('express').Router()
const recipeController = require('../controllers/recipeController')


router.get('/favorites', recipeController.favorites)
router.get('/search', recipeController.search)
router.post('/addToFavorites/:id', recipeController.addToFavorites)
router.delete('/delete/:id', recipeController.delete)


module.exports = router

