import expect from 'expect'
import colors from '../../src/reducers'

describe('colors reducer', () => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0
  }

  it('should have an initial state', () => {
    expect(colors(undefined, {}))
      .toEqual(initialState)
  })

  it('should change the red value', () => {

    const newColorState = colors({
      red: 0,
      green: 0,
      blue: 0
    }, {
      type: 'CHANGE_COLOR_LEVEL',
      color: 'red',
      value: 255
    })

    expect(newColorState).toEqual({
      red: 255,
      green: 0,
      blue: 0
    })
  })
  
})