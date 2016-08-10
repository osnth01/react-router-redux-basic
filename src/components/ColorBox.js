import React, { PropTypes } from 'react'

const numToHex = (num) => {
  let hex = num.toString(16)
  if (hex.length === 1)
    hex = "0" + hex
  return hex
}

const ColorBox = ({ colors }) => {
  let red
  let green
  let blue

  colors.map((color) => {
    switch (color.name) {
    case 'red':
      red = numToHex(color.value)
      break
    case 'green':
      green = numToHex(color.value)
      break
    case 'blue':
      blue = numToHex(color.value)
      break
    default:
      break
    }
  })

  let hex = '#' + red + green + blue

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
  colors: PropTypes.array.isRequired
}


export default ColorBox