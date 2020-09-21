import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import notificationMiddleware from './middleware/notificationMiddleware';

import authReducer from './reducers/authReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    noti: notificationReducer
});

export default createStore(rootReducer, applyMiddleware(notificationMiddleware, promiseMiddleware));