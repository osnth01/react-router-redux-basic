import React from 'react'
import expect from 'expect'
import App from '../../src/components/App'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<App />)

  return {
    component,
    h1: component.find('h1')
  }
}

describe('App', () => {
  it('renders "Color Box"', () => {
    const { component, h1 } = setup()

    expect(h1.text()).toEqual('Color Box')
  })
})