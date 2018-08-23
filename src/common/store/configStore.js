import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const isProduction = process.env.NODE_ENV === 'production' // eslint-disable-line no-undef
const middleWares = [thunk]

if (!isProduction) {
  middleWares.push(createLogger())
}

const Store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleWares)
  )
)

export default Store
