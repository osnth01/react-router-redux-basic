import React from 'react'
import expect from 'expect'
import SideBar from '../../src/components/SideBar'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<SideBar />)

  return {
    component,
    links: component.find('Link')
  }
}

describe('SideBar', () => {
  it('should render the sidenav', () => {
    const { component, links } = setup()

    expect(links.length).toEqual(4)
  })
})