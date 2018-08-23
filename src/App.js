import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './common/store/configStore'
import AppContainer from './web/containers/AppContainer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
