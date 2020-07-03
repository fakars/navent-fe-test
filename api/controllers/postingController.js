const express = require('express')
const router = express.Router()
const postingService = require('../services/postingService')

router.get('/', (req, res) => {
  const postings = postingService.getPostings()
  res.json(postings)
})

router.get('/:id', (req, res) => {
  const posting = postingService.getPostingById(req.params.getPostingById)
  res.json(posting)
})

module.exports = router
