import React from 'react'
import expect from 'expect'
import ColorBox from '../../src/components/ColorBox'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    red: 0,
    green: 0,
    blue: 0
  }

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