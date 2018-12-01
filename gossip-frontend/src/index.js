import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers'

// initialize firestore
import './config'

import Home from './home'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    } 
}

render(<App />, document.getElementById('mount'))
