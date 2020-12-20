import React from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNew = async (event) => {
    event.preventDefault()
    const anecContent = event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(addNote(anecContent))
    dispatch(newNotification(`new anecdote '${anecContent}'`, 5))
  }
  
  return(
    <>
    <h2>create new</h2>
    <form onSubmit={addNew}>
      <div><input type='text' name='anecdote' /></div>
      <button>create</button>
    </form>
    </>
  )
}

export default AnecdoteForm