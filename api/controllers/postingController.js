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

router.put('/:id', (req, res) => {
  const updatedPosting = postingService.updatePostingById(
    req.params.id,
    req.body
  )
  res.json(updatedPosting)
})

module.exports = router
