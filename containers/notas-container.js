import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { notas } from '../actions/notas-action'
import Notas from '../components/notas'

const mapStateToProps = state => ({
  notas: state.notas.notas
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ notas }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Notas);