import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './reducers/authReducer';
import orgReducer from './reducers/orgReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    org: orgReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));