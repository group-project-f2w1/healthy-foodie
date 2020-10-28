const router = require('express').Router()
const zomatoRouter = require('./zomatoRouter')

router.use('/zomato', zomatoRouter)

module.exports = router