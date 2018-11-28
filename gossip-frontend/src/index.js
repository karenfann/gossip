import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers'

import HomeScreen from './components/home'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        )
    } 
}

render(<App />, document.getElementById('mount'))
