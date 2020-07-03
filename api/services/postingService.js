const db = require('../db.json')

const getPostings = () => {
  return db.postings
}

const getPostingById = id => {
  return db.postings.find(posting => posting.id === id)
}

module.exports = { getPostings, getPostingById }
