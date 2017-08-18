import React, { Component } from 'react'

import Cliente from '../containers/cliente-container'

class Notas extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.notas(); 
  }

  renderNotas(notas) {
    return notas.map((nota) => (
      <div>
        <ul>
          { this.renderCliente(nota.clienteId) }
        </ul>
      </div>
    ))
  }

  renderCliente(clienteId) {
      <li>
        <Cliente clienteId={ clienteId }/>
      </li>
  }

  render() {
    const notas = this.props.notas;

    return (
      <div className='acc-order-container'>
        { this.renderNotas(notas) }
      </div>
    )
  }
}

export default Notas
