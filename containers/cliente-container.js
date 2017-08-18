import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cliente } from '../actions/cliente-action'
import Cliente from '../components/cliente'

const mapStateToProps = state => ({
  cliente: state.cliente.cliente
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ cliente }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cliente);
