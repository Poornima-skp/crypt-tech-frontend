import { combineReducers } from 'redux';

import posts from './posts'
import store from './store'
import auth from './auth.js'


const reducers =  combineReducers({
    posts,
    store,
    auth
})

export default reducers;