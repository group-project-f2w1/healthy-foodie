const axios = require('axios')
const key = process.env.UNSPLASH_KEY2
const api = process.env.API_UNSPLASH

class imgController {

  static randomPic(req, res, next){

    axios({
      method : 'get',
      url : api + '/photos/random',
      headers: {
        Authorization : `Client-ID ${key}`
      }
    })
      .then(img => {
        //console.log(img.data.id);
        res.status(200).json(
          {
            id:img.data.id,
            imgUrl: img.data.links
          
          })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = imgController