import axios from 'axios'

const cliente = (clienteId) => {

  const url = 'http://localhost:8080/cliente'
  const config = {
    headers: {
      'Authorization': 'Basic 123'
    },
    params: {
      'clienteId': clienteId
    }
  }

  return dispatch => {
    axios.get(url, config)
      .then(response => dispatch({ type: 'GET_CLIENTE_SUCESS', payload: response.data }))
      .catch(error => dispatch({ type: 'GET_CLIENTE_ERROR', error: error }));
  }
}

module.exports = {
  cliente
}

