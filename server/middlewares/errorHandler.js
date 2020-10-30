module.exports = (err, req, res, next) => {
  
  let status = err.status || 500
  let message = err.msg || 'Internal Server Error'

  
  

  if (err.name) {

    if (err.name.includes('Sequelize')) {
      
      
      status = 400
      message = err.errors?.map(error => error.message).join(', ')
      console.log(message);
      
    }

    switch(err.name){
      case 'NotFoundError':
      case 'ForbiddenError':
      case 'UnauthorizedError':
      case 'BadRequestError': 
        status = err.status
        message = err.msg
        break;
      case 'JsonWebTokenError': 
      case 'TokenExpiredError': 
        status = 401
        message = 'Failed to authenticate'
        break;
      case 'Error': 
        status = err.response.status
        message = err.response.statusText
    }
  }

  res.status(status).json({ message })

}