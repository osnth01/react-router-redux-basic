const initialState = {
    red: 0,
    green: 0,
    blue: 0
  }

const colors = (state = initialState, action) => {
  switch(action.type) {
    
    case 'CHANGE_COLOR_LEVEL':
      return Object.assign(state, {
        [action.color]: action.value
      })
      
    default:
      return state
  }

  return state
}

export default colors