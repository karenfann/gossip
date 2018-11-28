import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import User from './user'

const store = createStore(
    combineReducers({
        User
    }),
    applyMiddleware(
        thunk 
    )
);

export {
    store
}
