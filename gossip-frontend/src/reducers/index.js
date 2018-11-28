import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import User from './user'

const store = createStore(
    combineReducers({
        User
    }),
    applyMiddleware(
      thunk,
        createLogger({
            collapsed: true
        })
    )
);

export {
    store
}
