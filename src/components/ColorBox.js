import React, { PropTypes } from 'react'

const numToHex = (num) => {
  let hex = num.toString(16)
  if (hex.length === 1)
    hex = "0" + hex
  return hex
}

const ColorBox = ({ colors }) => {

  let hex = '#' + numToHex(colors.red) + numToHex(colors.green) + numToHex(colors.blue)

  let style = {
    border: '1px solid black',
    width: '150px',
    height: '150px',
    textAlign: 'center',
    lineHeight: '150px',
    background: hex
  }

  return (
    <div style={style}>
      {hex}
    </div>
  )
}

ColorBox.propTypes = {
  colors: PropTypes.object.isRequired
}


export default ColorBox