const { User } = require('../models/')

const { comparePassword } = require('../helpers/bcrypt')
const { signToken, verifyToken } = require('../helpers/jwt')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {

  static async googleSignin(req, res, next) {

    const token = req.body.token
    console.log({token})


    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    })

    const payload = ticket.getPayload()

    // console.log({payload})

    let avatarUrl = payload.picture
    if (payload.picture) {
      avatarUrl = `https://robohash.org/${payload.name}`
    }
    
    let user = {
      name: payload.name,
      email: payload.email,
      password: "123",
      avatarUrl
    }
    
    
    // console.log({user})

    const data = await User.findOne({where : { email: user.email }})

    console.log(data.toJSON())
    
    if (data) {

      // console.log(data.toJSON())
      // console.log('^----- user sdh ada di database')
      const access_token = signToken({
        id: data.id,
        email:data.email
      })
      res.status(200).json({access_token})
    } else {
    console.log('user belum ada di database, bikin sekarang')
      const newUser = await User.create(user)

      // console.log(newUser.toJSON())
      // console.log({id: newUser.id, email: newUser.email})
      // console.log('^----- data user yang akan dikasi access token')
      const access_token = signToken({
        id: newUser.id,
        email:newUser.email
      })
      res.status(200).json({access_token})


    }

    } catch (error) {
      console.log(error, '\n^----- google login error')
      next(error)
    }

  }

  static async signup(req, res, next) {

    console.log(req.body)
    console.log('^----- sign up')
    
    try {
      const payload = {
        email: req.body.email,
        password: req.body.password,
        name : req.body.name
      }
      
      const user = await User.create(payload)

      console.log(user.toJSON(), '^----- sign up success:')

      res.status(201).json({
        message: 'Account registration successful: ' + user.email
      })
      
    } catch (error) {
      next(error)
    }

  }

  static async signin(req, res, next) {

    try {
      const payload = {
        email: req.body.email,
        password: req.body.password
      }
      
      let user = await User.findOne({
        where: { email : payload.email }
      })
      
      
      if (!user) {
        
        next({ status: 401, msg: "Invalid email or password"})
        
      } else if (!comparePassword(payload.password, user.password)) {
        
        // Wrong password
        next({ status: 401, msg: "Invalid email or password" })
        
      } else {
        console.log('<< masuk sini')

        const access_token = signToken({
          id: user.id,
          email: user.email
        })

        
          res.status(200).json({ access_token })
        }
  
    } catch (err) {
      next(err)
    }

  }

  static async signout(req, res, next) {

  }

  static async findOne(req,res,next){
    try {
      const token = req.headers.access_token
      const email = verifyToken(token).email
      
      const userData = await User.findOne({
        where : { email }
      })

      const returnedData = {
        name : userData.name,
        avatarUrl : userData.avatarUrl
      }

      res.status(200).json(returnedData)

    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController