import React from 'react'
import expect from 'expect'
import App from '../../src/components/App'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<App />)

  return {
    component
  }
}

describe('App', () => {
  it('renders "Color Box"', () => {
    const { component } = setup()

    expect(component.text()).toEqual('Color Box')
  })
})