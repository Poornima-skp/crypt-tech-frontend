import { combineReducers } from 'redux';

import posts from './posts'
import store from './store'
import authReducer from './auth.js'


const reducers =  combineReducers({
    posts,
    store,
    authReducer
})

export default reducers;