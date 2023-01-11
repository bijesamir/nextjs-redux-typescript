import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

//export default const combinedReducers = combineReducers({ counter: counterReducer })

export default combineReducers({
  counter: counterReducer,
})
