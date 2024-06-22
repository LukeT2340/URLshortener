const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const urlRoutes = require('./routers/urlRoutes')
const redirectRouters = require('./routers/redirectRoutes')
require('dotenv').config()
app.use(express.json())
const port = process.env.PORT || 3001
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('connected', () => {
  console.log('Connected to MongoDB')
})

db.on('error', (err) => {
  console.error('MongoDB connection error:', err)
})

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB')
})

app.use(cors({
  origin: process.env.REACT_APP_URL, 
  credentials: true,
}))

app.use('/url', urlRoutes)

app.use('/r', redirectRouters)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})