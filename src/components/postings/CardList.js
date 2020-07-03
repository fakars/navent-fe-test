import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPostings } from '../../redux/actions'
import Card from './Card'

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

const CardList = ({ postings, fetchPostings, selectedFilter }) => {
  useEffect(() => {
    fetchPostings()
  }, [fetchPostings])

  const filtered = () => {
    if (
      selectedFilter === postings.operation_type.operation_type_id &&
      selectedFilter !== 0
    ) {
      return postings.filter(
        p => p.operation_type.operation_type_id === selectedFilter
      )
    } else {
      return postings
    }
  }

  return (
    <section>
      {postings &&
        sortedPostings(postings).map(posting => {
          return <Card key={posting.posting_id} postingData={posting} />
        })}
    </section>
  )
}

const mapStateToProps = state => {
  return {
    postings: state.postings,
    selectedFilter: state.filters.selectedFilter,
  }
}

export default connect(mapStateToProps, { fetchPostings })(CardList)
