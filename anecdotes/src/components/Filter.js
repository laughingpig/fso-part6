import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(event) => props.updateFilter(event.target.value)} />
    </div>
  )
}

const mapDispatchToProps = {
  updateFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter