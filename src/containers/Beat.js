import React from 'react'
import { connect } from 'react-redux'
import { beat } from '../actions'


const Beat = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(beat(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Beat
        </button>
      </form>
    </div>
  )
}

export default connect()(Beat)