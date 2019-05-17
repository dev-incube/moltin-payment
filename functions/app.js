const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to server'))

app.post('/post/:id', (req, res) => {
  const { body, params, query } = req
  res.send({ body, params, query })
})

module.exports = app
