const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 3000
const router = require('./routers')


app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(router)



app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
  
})