import { combineReducers } from 'redux'
import login from './login'
import app from './app'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  login,
  app,
  dashboard
})

export default rootReducer
