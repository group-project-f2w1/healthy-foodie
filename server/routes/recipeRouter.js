const router = require('express').Router()
const recipeController = require('../controllers/recipeController')


router.get('/favorites', recipeController.favorites)
router.get('/search', recipeController.search)
router.get('/addToFavorites', recipeController.addToFavorites)
router.get('/findOne/:id', recipeController.findOne)
router.delete('/delete/:RecipeId', recipeController.delete)


module.exports = router

