import { bindActionCreators } from 'redux'
import * as ColorActions from '../actions'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider'

const Green = ({ value, changeColorLevel }) => {
  return (
    <div>
      <h1>Green</h1>
      <Slider
        color={'green'}
        value={value}
        onChange={changeColorLevel} />
    </div>
  )
}

Green.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.colors.green
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ColorActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Green)
