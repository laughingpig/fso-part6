import React, {useEffect} from 'react'
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AndecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {useDispatch} from 'react-redux'
import { initAnec } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect (() => {
      dispatch(initAnec())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App