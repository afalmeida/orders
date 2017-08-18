import axios from 'axios'

const notas = () => {

  const url = 'http://localhost:8080/notas'
  const config = {
    headers: {
      'Authorization': 'Basic 123'
    },
    params: {
      'startDate': '2016-06-06',
      'endDate': '2018-06-06',
    }
  }

  return dispatch => {
    axios.get(url, config)
    .then(response => dispatch({type: 'GET_NOTAS_SUCESS', payload: response.data }))
    .catch(error => dispatch({type: 'GET_NOTAS_ERROR', error: error}));
  }
}

module.exports = {
  notas
}

