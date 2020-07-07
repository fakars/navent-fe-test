const express = require('express')
const router = express.Router()
const filterService = require('../services/filterService')

router.get('/', (req, res) => {
  try {
    const filters = filterService.getFilters()
    res.json(filters)
  } catch (e) {
    res.json({
      message: `The request for filters failed with the following exception: ${e}`,
    })
  }
})

module.exports = router
