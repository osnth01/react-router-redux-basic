import { bindActionCreators } from 'redux'
import * as ColorActions from '../actions'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider'

const Red = ({ colors, changeColorLevel }) => {
  return (
    <div>
      <h1>Red</h1>
      <Slider
        color={'red'}
        value={colors.red}
        onChange={changeColorLevel} />
    </div>
  )
}

Red.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    colors: state.colors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ColorActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Red)
