import { bindActionCreators } from 'redux'
import * as ColorActions from '../actions'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider'

const Red = ({ value, changeColorLevel }) => {
  return (
    <div>
      <h1>Red</h1>
      <Slider
        color={'red'}
        value={value}
        onChange={changeColorLevel} />
    </div>
  )
}

Red.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.colors.red
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ColorActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Red)
