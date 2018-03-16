import React from 'react'
import { connect } from 'react-redux'
import { sleep } from '../actions'


const Sleep = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(sleep())
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Sleep
        </button>
      </form>
    </div>
  )
}

export default connect()(Sleep)
