import anecdoteService from '../services/anecdote'

export const addVote = (anecdote) => {
  return async dispatch => {
    const updatedAnec = await anecdoteService.voteAnec(anecdote)
    dispatch ({
      type: 'ADD_VOTE',
      data: {updatedAnec}
    })
  }  
}

export const addNote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.newAnec(content)
    dispatch ({
      type: 'ADD_NOTE',
      data: {newAnecdote}
    })
  }
}

export const initAnec = () => {
  return async dispatch => {
    const content = await anecdoteService.getAll()
    dispatch ({
      type: 'INIT_ANECDOTE',
      data: {content}
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE': 
      const idToUpdate = action.data.updatedAnec.id
      const anecdoteToUpdate = state.find(anec => anec.id === idToUpdate)
      const updatedAnec = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes+1
      }
      return state.map(anec => 
        anec.id !== idToUpdate ? anec : updatedAnec
      )

    case 'ADD_NOTE':
      const newAnecdote = action.data.newAnecdote
      return [...state, newAnecdote]

    case 'INIT_ANECDOTE':
      return action.data.content

    default:
      return state
  }
}

export default anecdoteReducer