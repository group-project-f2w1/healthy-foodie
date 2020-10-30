const axios = require('axios')


const { FavoriteRecipe } = require('../models')

const {verifyToken} = require('../helpers/jwt')

class RecipeController {

  static async favorites (req, res, next){

    console.log('favorites triggered')


    try {

      // console.log(req.headers)
      const decoded = verifyToken(req.headers.access_token)

      console.log({decoded})

      const favorites = await FavoriteRecipe.findAll({
        where: { UserId: decoded.id },
      })
      // console.log(favorites)
      
      res.status(200).json({ data: favorites })


    } catch (error) {
      next(error)
    }

  
  }

  static async info (req, res, next) {

    let api = `https://api.spoonacular.com/recipes/${id}/information`
    
    axios({
      method: 'get',
      url: api,
      params: {
        apiKey: process.env.SPOONACULAR_KEY,
      },
    })
      .then(response => {
        
        console.log(response.data)
        
        res.status(200).json(response.data)
      })
      .catch(err => {
        next(err)
      })
  }

  static async search (req, res, next){

    const api = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiSimple = 'https://api.spoonacular.com/recipes/search'
  
    
    let food = req.query.food

    console.log({food})
   
    axios({
      method: 'get',
      url: api,
      params: {
        apiKey: process.env.SPOONACULAR_KEY,
        query: food,     
        addRecipeInformation: true,
      },
    })
      .then(response => {
        
        console.log({response})
       
        res.status(200).json(response.data)
      })
      .catch(err => {
        //console.log({err})
        next(err)
      })
  }

  static async addToFavorites(req, res, next) {
    
    console.log(req.query)

    try {
      const UserId = verifyToken(req.headers.access_token).id
      const { RecipeId, recipeName } = req.query

      const hadBeenAdded = await FavoriteRecipe.findOne({
        where: {UserId, RecipeId}
      })
      if (hadBeenAdded) {
        next({
          status: 400, 
          msg: 'Recipe had already been added to favorites'
        })
      } else {

        console.log({UserId, RecipeId, recipeName})
        const favorite = await FavoriteRecipe.create({UserId, RecipeId, recipeName})
  
        // console.log(favorite.toJSON(), '\n ^----- added to favorite')
  
        res.status(201).json({
          message: 'Recipe was successfully added to favorites'

        })
  
      }
    } catch (error) {
      next(error)
    }

  }

  static async delete(req, res, next) {
    try {

      const UserId = verifyToken(req.headers.access_token).id
      const { RecipeId } = req.params

      console.log({UserId, RecipeId})

      const favorite = await FavoriteRecipe.findOne({
        where: {UserId, RecipeId}
      })

      if (favorite) {
        console.log(favorite.toJSON())

        await FavoriteRecipe.destroy({
          where: {UserId, RecipeId}
        })

        res.status(200).json({
          message: 'Successfully deleted favorite item'
        })
      } else {
        throw {msg: 'Cannot find favorite item', status: 404}
      }

    } catch (error) {
      next(error)
    }
  }
}

module.exports = RecipeController