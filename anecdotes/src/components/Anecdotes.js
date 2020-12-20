import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const Anecdote = ({content, votes, handleClick}) => {
  return (
    <li>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </li>
  )
}

const Anecdotes = (props) => {
  const anecdotes = props.anecdotes.filter(stct => stct.content.includes(props.filter))

  return(
  <ul>
  {anecdotes.sort((a,b) => (b.votes - a.votes)).map(anecdote =>
    <Anecdote key={anecdote.id} content={anecdote.content} votes={anecdote.votes} 
      handleClick={() => {
        props.addVote(anecdote)
        props.newNotification(`you voted '${anecdote.content}'`, 5)
      }}  />
  )}
  </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  addVote,
  newNotification
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes