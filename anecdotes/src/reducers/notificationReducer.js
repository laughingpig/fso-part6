const anecdotesAtStart = ''

export const newNotification = (content, time) => {
  return async dispatch => {
    dispatch ({
      type: 'NEW_NOTIFICATION',
      data: {content}
    })
    setTimeout(() => {
      dispatch ({
        type: 'REMOVE_NOTIFICATION',
      })
    }, time*1000)
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  }
}

const notificationReducer = (state = anecdotesAtStart, action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION': 
      const newAnecdote = action.data.content
      return newAnecdote

    case 'REMOVE_NOTIFICATION': 
      return ''      

    default:
      return state
  }
}

export default notificationReducer