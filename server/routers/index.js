const router = require('express').Router()
const zomatoRouter = require('./zomatoRouter')

router.use('/restaurants', zomatoRouter)

module.exports = router