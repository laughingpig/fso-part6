import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addNew = async (event) => {
    event.preventDefault()
    const anecContent = event.target.anecdote.value
    event.target.anecdote.value=''
    props.addNote(anecContent)
    props.newNotification(`new anecdote '${anecContent}'`, 5)
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

const mapDispatchToProps = {
  addNote,
  newNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm