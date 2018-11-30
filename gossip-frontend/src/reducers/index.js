import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import User from './user'
import Gossip from './gossip'

const store = createStore(
    combineReducers({
        User,
        Gossip
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
