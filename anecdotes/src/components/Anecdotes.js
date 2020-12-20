import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({filter, anecdotes}) => {return anecdotes.filter(stct => stct.content.includes(filter))})

  return(
  <ul>
  {anecdotes.sort((a,b) => (b.votes - a.votes)).map(anecdote =>
    <Anecdote key={anecdote.id} content={anecdote.content} votes={anecdote.votes} 
      handleClick={() => {
        dispatch(addVote(anecdote))
        dispatch(newNotification(`you voted '${anecdote.content}'`, 5))
      }}  />
  )}
  </ul>
  )
}

export default Anecdotes