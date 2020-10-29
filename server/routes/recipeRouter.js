const router = require('express').Router()
const recipeController = require('../controllers/recipeController')


router.get('/favorites', recipeController.favorites)
router.get('/search', recipeController.search)
router.post('/addToFavorites/:RecipeId', recipeController.addToFavorites)
router.delete('/delete/:RecipeId', recipeController.delete)


module.exports = router

