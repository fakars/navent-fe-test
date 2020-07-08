const express = require('express')
const router = express.Router()
const postingService = require('../services/postingService')

router.get('/', (req, res) => {
  try {
    const postings = postingService.getPostings()
    res.json(postings)
  } catch (e) {
    res.json({
      message: `The request for postings failed with the following exception: ${e}`,
    })
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const posting = postingService.getPostingById(id)
  if (posting) {
    res.json(posting)
  } else {
    res.status(404)
    res.json({
      message: `Error No postings found for id ${id}`,
    })
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updateBody = req.body
  try {
    if (updateBody) {
      postingService.updatePostingById(id, updateBody)
    }
    res.status(200)
    res.json(postingService.getPostingById(id))
  } catch (e) {
    res.json({
      message: `Unable to update posting with id ${id}`,
    })
  }
})

module.exports = router
