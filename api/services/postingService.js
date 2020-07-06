const fs = require('fs')
const path = require('path')
const db = path.resolve('../postings-list/api', 'db.json')
const { post } = require('../controllers/filterController')

const getPostings = () => {
  try {
    const postings = JSON.parse(fs.readFileSync(db)).postings
    return postings
  } catch (e) {
    console.error('No postings found', e)
  }
}

const getPostingById = id => {
  let foundPosting = {}
  try {
    const postings = JSON.parse(fs.readFileSync(db)).postings
    foundPosting = postings.find(posting => posting.posting_id === id)
    if (foundPosting) return foundPosting
  } catch (e) {
    console.error(`No postings found for id ${id}`, e)
  }
}

const updatePostingById = (id, body) => {
  try {
    const postings = getPostings()
    let postingIndex
    const postingToUpdate = postings.find((posting, i) => {
      postingIndex = i
      return posting.posting_id === id
    })
    postings.splice(postingIndex, 1, { ...postingToUpdate, ...body })
    fs.writeFileSync(db, JSON.stringify({ postings: postings }))
  } catch (e) {
    console.error('Could not update posting')
  }
}

module.exports = { getPostings, getPostingById, updatePostingById }
