import React, { Component } from 'react'
import SideBar from './SideBar'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Color Box</h1>
        <SideBar />
        {this.props.children}
      </div>
    )
  }
}

export default App