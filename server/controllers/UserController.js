const { User } = require('../models/')

const { comparePassword } = require('../helpers/bcrypt')

class UserController {

  static async googleSignin(req, res, next) {
    const token = req.body.token

    client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(ticket=>{
        const payload = ticket.getPayload()

        const user = {
            name: payload.name,
            email: payload.email,
            password: "123"
        }

        return User.findOne({where : { email: user.email }})
    })
    .then(data => {
        if(data) {
            return data
        } else {
            return User.create(user)
        }
    })
    .then(data => {
        // console.log(data.dataValues)
        const access_token = signToken({
          email:payload.email
        })
        res.status(200).json({access_token, data:data.dataValues.name})
    })
    .catch(err => {
        // console.log(err, '\n>>>>>>>> google login error')
        next(err)
    })
  }

  static async signup(req, res, next) {

    // console.log(req.body)
    
    try {
      const payload = {
        email: req.body.email,
        password: req.body.password,
      }
      
      const user = await User.create(payload)

      res.status(201).json({
        message: 'Account registration successful',
        email: user.email
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

        try {
          user = await User.findOne({
            where: { username: payload.user }
          })

          if (!user) {
            
          } else if (!comparePassword(payload.password, user.password)){
            next({ status: 401, msg: "Invalid email or password"})

          } else {
            // User is found using his/her username
            const access_token = signToken({
              id: user.id,
              email: user.email
            })
  
            res.status(200).json({
              access_token
            })
          }
          
        } catch (err) {
          next(err)
        }


      } else if (!comparePassword(payload.password, user.password)) {

        // User is found, but the password given is wrong
        next({ status: 401, msg: "Invalid email or password" })

        } else {

          // User is found using his/her email address
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

  static async logout(req, res) {

  }

}

module.exports = UserController