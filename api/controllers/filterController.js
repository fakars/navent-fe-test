const express = require('express')
const router = express.Router()
const filterService = require('../services/filterService')

router.get('/', (req, res) => {
  const filters = filterService.getFilters()
  return res.json(filters)
})

module.exports = router
