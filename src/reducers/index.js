const initialState = [
  {
    name: 'red',
    value: 0
  },
  {
    name: 'green',
    value: 0
  },
  {
    name: 'blue',
    value: 0
  }
]

const colors = (state = initialState, action) => {
  switch(action.type) {
    
    case 'CHANGE_COLOR_LEVEL':
      return state.map((color) => {
        if (color.name === action.color) {
          color.value = action.value
        }
        return color
      })

    default:
      return state
  }

  return state
}

export default colors