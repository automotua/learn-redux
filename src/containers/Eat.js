import React from 'react'
import { connect } from 'react-redux'
import { eat } from '../actions'


const Eat = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(eat(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Eat
        </button>
      </form>
    </div>
  )
}

export default connect()(Eat)
