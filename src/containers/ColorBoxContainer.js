import { connect } from 'react-redux'
import ColorBox from '../components/ColorBox'

function mapStateToProps(state) {
  return {
    colors: state.colors
  }
}

export default connect(mapStateToProps)(ColorBox)