const express = require('express')
const app = express()
const cors = require('cors')
const postingController = require('./controllers/postingController')
const filterController = require('./controllers/filterController')

const options = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(options))

app.use('/postings', postingController)
app.use('/filters', filterController)

app.listen(3001, () => {
  console.log('Server started')
})
