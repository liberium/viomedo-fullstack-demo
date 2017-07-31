import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'

import { TrialApplicationForm } from 'containers'

const App = () =>
  <Provider store={store}>
    <TrialApplicationForm />
  </Provider>

export default App
