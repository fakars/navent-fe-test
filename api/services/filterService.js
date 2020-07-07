const db = require('../db.json')

const getFilters = () => {
  return db.filters
}

module.exports = { getFilters }
