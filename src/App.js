import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import { TrialApplicationForm } from 'containers'

import './App.css'

const App = () =>
  <Provider store={store}>
    <main id="App">
      <TrialApplicationForm id="App" onSubmit={values => console.log(values)} />
    </main>
  </Provider>

export default App
