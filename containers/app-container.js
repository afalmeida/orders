import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from '../components/app'

const mapStateToProps = state => ({
  value: state.value
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  }, dispatch)

const appContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

appContainer.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

export default appContainer
