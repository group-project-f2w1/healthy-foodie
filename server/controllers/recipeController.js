const axios = require('axios')
const api = 'https://api.spoonacular.com/recipes/complexSearch'
const key = process.env.SPOONACULAR_KEY

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

  }

  static async delete(req, res, next) {

  }
}

module.exports = RecipeController