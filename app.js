const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello Mrs. Reshma</h1>')
})

app.get('/details', function (req, res) {
  res.send('This will send details')
})

app.listen(3000)