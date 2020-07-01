import React from 'react'
import Card from './Card'
import postings from './postingdata'

const sortedPostings = postingsArray => {
  const order = {
    SUPERHIGHLIGHTED: 1,
    HIGHLIGHTED: 2,
    SIMPLE: 3,
  }
  return postingsArray.sort(
    (a, b) => order[a.publication_plan] - order[b.publication_plan]
  )
}

const CardList = () => {
  return (
    <section>
      {postings &&
        sortedPostings(postings).map(posting => {
          return <Card key={posting.posting_id} postingData={posting} />
        })}
    </section>
  )
}

export default CardList
