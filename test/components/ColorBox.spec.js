import React from 'react'
import expect from 'expect'
import ColorBox from '../../src/components/ColorBox'
import { shallow } from 'enzyme'

function setup() {
  const props = [
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

  const component = shallow(<ColorBox colors={props} />)

  return {
    component,
    props
  }
}

describe('ColorBox', () => {
  it('returns a hex value', () => {
    const { component } = setup()

    expect(component.text()).toEqual('#000000');
  })
})