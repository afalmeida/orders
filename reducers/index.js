import { combineReducers } from 'redux'

import NotasReducer from './notas-reducer'
import clienteReducer from './cliente-reducer'


const rootReducer = combineReducers({
  notas: NotasReducer,
  clienteReducer: ClienteReducer
});

export default rootReducer;