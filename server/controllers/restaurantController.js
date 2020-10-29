const axios = require('axios')
const api = process.env.API_ZOMATO
const key = process.env.ZOMATO_KEY

class RestauranController {

  static showCity (req, res, next){


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
  static searchRestaurant (req, res, next){

    let cityId = req.query.city
    let nama_makanan = req.query.makanan
   
    axios({
      method: 'get',
      url: api + '/search',
      params: {
        entity_id: cityId,     
        entity_type: 'city',
        q: nama_makanan,
        count: 10
      },
      headers: {
        "user-key": key
      }
    })
      .then(response => {
       let restaurants = response.data.restaurants.map(el => {
          let obj = {
            id: el.restaurant.id,
            name: el.restaurant.name,
            url: el.restaurant.url,
            location: el.restaurant.location.address,
            thumbnail: el.restaurant.thumb,
            img: el.restaurant.featured_image
          }
          return obj
        })
        res.json(restaurants)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = RestauranController