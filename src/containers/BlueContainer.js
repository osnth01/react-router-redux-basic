import { bindActionCreators } from 'redux'
import * as ColorActions from '../actions'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider'

const Blue = ({ value, changeColorLevel }) => {
  return (
    <div>
      <h1>Blue</h1>
      <Slider
        color={'blue'}
        value={value}
        onChange={changeColorLevel} />
    </div>
  )
}

Blue.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.colors.blue
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ColorActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blue)
