import React, { Component } from 'react'
import { Link } from 'react-router'

class SideBar extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Color Box</Link></li>
          <li><Link to="/red">Red</Link></li>
          <li><Link to="/green">Green</Link></li>
          <li><Link to="/blue">Blue</Link></li>
        </ul>
      </div>
    )
  }
}

export default SideBar