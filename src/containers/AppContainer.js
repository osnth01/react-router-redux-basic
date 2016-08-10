import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ColorActions from '../actions'
import App from '../components/App'

function mapStateToProps(state) {
  return {
    colors: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ColorActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)