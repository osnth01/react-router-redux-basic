import expect from 'expect'
import { changeColorLevel } from '../../src/actions'

describe('changeColorLevel', () => {
  it('should create a CHANGE_COLOR action', () => {
    let color = 'red'
    let value = 255

    expect(
      changeColorLevel(color, value)
    )
    .toEqual(
      {
        type: 'CHANGE_COLOR_LEVEL',
        color,
        value
      }
    )
  })
})