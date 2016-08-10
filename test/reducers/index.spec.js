import expect from 'expect'
import colors from '../../src/reducers'

describe('colors reducer', () => {
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

  it('should have an initial state', () => {
    expect(colors(undefined, {}))
      .toEqual(initialState)
  })

  it('should change the red value', () => {

    const newColorState = colors([
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
    ], {
      type: 'CHANGE_COLOR_LEVEL',
      color: 'red',
      value: 255
    })

    expect(newColorState).toEqual([
      {
        name: 'red',
        value: 255
      },
      {
        name: 'green',
        value: 0
      },
      {
        name: 'blue',
        value: 0
      }
    ])
  })
  
})