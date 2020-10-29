const axios = require('axios')
const key = 'qYUA48NMR9f6RFl6_0kIwmobSEa9wBng26Z-6jsVKiM'
const api = 'https://api.unsplash.com' 

class imgController {

  static randomPic(req, res){

    axios({
      method : 'get',
      url : api + '/photos/random',
      headers: {
        Authorization : `Client-ID ${key}`
      }
    })
      .then(img => {
        console.log(img.data.id, '<<<<');
        res.status(200).json(
          {
            id:img.data.id,
            imgUrl: img.data.links
          
          })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}

module.exports = imgController