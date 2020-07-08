import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPostings } from '../../redux/actions'
import Card from './Card'

const sortPostings = postingsArray => {
  const order = {
    SUPERHIGHLIGHTED: 1,
    HIGHLIGHTED: 2,
    SIMPLE: 3,
  }
  return postingsArray.sort(
    (a, b) => order[a.publication_plan] - order[b.publication_plan]
  )
}

const CardList = ({
  postings,
  fetchPostings,
  selectedOperation,
  addressSearched,
}) => {
  useEffect(() => {
    fetchPostings()
  }, [fetchPostings])

  const filtered = postingsArray => {
    if (selectedOperation !== '0') {
      postingsArray = postingsArray.filter(
        ({ operation_type }) =>
          operation_type.operation_type_id.toString() === selectedOperation
      )
    }
    if (addressSearched !== '') {
      postingsArray = postingsArray.filter(({ posting_location }) =>
        `${posting_location.address}, ${posting_location.zone}, ${posting_location.city}`
          .toLowerCase()
          .includes(addressSearched.toLowerCase())
      )
    }
    return postingsArray
  }

  return (
    <section>
      {postings &&
        sortPostings(filtered(postings)).map(posting => {
          return <Card key={posting.posting_id} postingData={posting} />
        })}
    </section>
  )
}

const mapStateToProps = ({ postings, filters }) => {
  return {
    postings,
    selectedOperation: filters.selectedOperation,
    addressSearched: filters.addressSearched,
  }
}

export default connect(mapStateToProps, { fetchPostings })(CardList)
