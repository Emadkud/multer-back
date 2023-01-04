const express = require('express')
const app = express() 
const cors = require ('cors')
const port = 5000

const userRoutes = require('./routes/user')

require ('./models/index')


app.use(express.static('public'))

app.use(express.json());

app.use('/user' , userRoutes) ;

app.use(cors())


app.listen(port, () => {
    console.log(`Server started on port:${port}`)
  })


