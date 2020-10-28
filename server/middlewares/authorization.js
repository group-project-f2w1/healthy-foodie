const { Todo } = require('../models')

function authorization (req, res, next) {

  const { TodoId } = req.params

  Todo.findByPk(TodoId)
  .then(data => {
    if (!data) {
      throw { msg: "Todo not found", status: 404 }
    }

    const UserId = req.user.id

    if (data.UserId != UserId) {
      throw { msg: "Not authorized", status: 401}
    }

    next()

  })
  .catch(err => {
    next(err)

  }) 


}

module.exports =  authorization
