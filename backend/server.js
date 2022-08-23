const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

// routes
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db')
        // listen for request
        app.listen(process.env.PORT || 4000, () => {
            console.log(`listening on port ${process.env.PORT || 4000}`)
        }) 
    })
    .catch(err => {
        console.log(err)
    })