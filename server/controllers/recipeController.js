const axios = require('axios')
const api = 'https://api.spoonacular.com/recipes/complexSearch'
const key = process.env.SPOONACULAR_KEY

const { FavoriteRecipe } = require('../models')

const {verifyToken} = require('../helpers/jwt')

class RecipeController {

  static async favorites (req, res, next){


    let city = req.query.city // default
    // city bisa di dapat di req body kiriman client

    axios({
      method: 'get',
      url: api + '/cities',
      params: {
        q: city
      },
      headers: {
        "user-key" : key
      }
    })
      .then(response => {
        //console.log(response.data.id.location_suggestion);
        res.status(200).json(
          {
            id: response.data.location_suggestions[0].id,
            name: response.data.location_suggestions[0].name
          })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
  static async search (req, res, next){

    
    let food = req.query.food
   
    axios({
      method: 'get',
      url: api,
      params: {
        apiKey: key,
        query: food,     
        addRecipeInformation: true,
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

  static async addToFavorites(req, res, next) {

    try {
      const UserId = verifyToken(req.headers.access_token).id
      const { RecipeId } = req.params

      // console.log({UserId, RecipeId})

      const hadBeenAdded = await FavoriteRecipe.findOne({
        where: {UserId, RecipeId}
      })
      if (hadBeenAdded) {
        res.status(400).json({ 
          message: 'Recipe had already been added to favorites'
        })
      } else {
        const favorite = await FavoriteRecipe.create({UserId, RecipeId})
  
        // console.log(favorite.toJSON(), '\n ^----- added to favorite')
  
        res.status(201).json({
          message: 'Recipe added to favorites'

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

        res.status(201).json({
          message: 'Successfully deleted favorite item'
        })
      } else {
        res.status(201).json({
          message: 'Cannot find favorite item'
        })
      }

    } catch (error) {
      next(error)
    }
  }
}

module.exports = RecipeController