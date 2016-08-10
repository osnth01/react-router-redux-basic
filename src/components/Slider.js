import React, { Component, PropTypes } from 'react'

const Slider = ({ onChange, color, value }) => {

  return (
  <input
    type="range"
    min="0"
    max="255"
    value={value}
    onChange={ (e) => {
      onChange(color, parseInt(e.target.value))
    }} />
  )
}

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}

export default Slider
