const axios = require('axios')
const api = 'https://developers.zomato.com/api/v2.1'
const key = '2e991f7ad83dc9ab6b6fe7178f3673a3'

class RestauranController {

  static showCity (req, res, next){

    let city = "Jakarta" // default
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

    const { cityId, nama_makanan } = req.body 
    // nama_makanan didapat dari req body client
    // cityId didapat client menilih city

    axios({
      method: 'get',
      url: api + '/search',
      params: {
        entity_id: cityId || 74,     
        entity_type: 'city',
        q: nama_makanan || 'Tahini Yogurt'
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
            location: el.restaurant.location.address
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