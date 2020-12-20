const filterAtStart = ''

export const updateFilter = (content) => {
  return {
    type: 'UPDATE_FILTER',
    data: {content}
  }
}

const filterReducer = (state = filterAtStart, action) => {
  switch(action.type) {
    case 'UPDATE_FILTER': 
      const updatedFilter = action.data.content
      return updatedFilter   

    default:
      return state
  }
}

export default filterReducer