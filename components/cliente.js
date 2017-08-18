import React, { Component } from 'react'


class Cliente extends Component {
  componentWillMount() {
    this.props.cliente(this.props.clienteId);
  }

  render() {
    const {
      nome
    } = this.props.cliente;


    return (
      <div className='acc-order-container'>
        { nome }
      </div>
    )
  }
}

export default Cliente
