import { combineReducers } from 'redux';

import posts from './posts'
import store from './store'


export default combineReducers({
    posts,
    store
})