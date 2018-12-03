import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import User from './user'
import Gossip from './gossip'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({ collapsed: true }))
}

const store = createStore(
    combineReducers({
        User,
        Gossip
    }),
    applyMiddleware(
        ...middleware
    )
);

export {
    store
}
