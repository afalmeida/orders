const INITIAL_STATE = {
  cli: {}
}

export default (state = INITIAL_STATE, action)  => {
  switch (action.type) {
    case 'GET_CLIENTE_SUCESS':
      return { ...state, cli: action.payload }
    default:
      return state
  }
}
