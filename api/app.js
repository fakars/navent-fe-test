const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const postingController = require('./controllers/postingController')
const filterController = require('./controllers/filterController')

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
)
app.use(bodyParser.json())

app.use('/postings', postingController)
app.use('/filters', filterController)

app.listen(3001, () => {
  console.log('Server started')
})
