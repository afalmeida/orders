const INITIAL_STATE = {
  notas: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_NOTAS_SUCESS':
      return { ...state, notas: action.payload }
    default:
      return state
  }
}
