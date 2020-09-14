import {ADD_EVENT, ADD_ERROR, ADD_WARNING, ADD_SUCCESS, ADD_SYSTEM, REMOVE_NOTIFICATION, CLEAR_ALL, TOGGLE_BANNER} from '../constants/types';
import createNotification from '../factories/createNotification';

const initialState = {
    items:[],
    isOpen: false,
    isLoading: false
};
  
export function addEvent(message = {}) {
    const options = {message: message, messageType: 'EventMessage'};
    return {
        payload: createNotification(options),
        type: ADD_ERROR
    }
}

export function addError(message) {
    const options = {message: `${message}`, messageType: 'ErrorMessage'};
    return {
        payload: createNotification(options),
        type: ADD_ERROR
    }
}

export function addWarning(message = {}) {
    const options = {message: message, messageType: 'WarningMessage'};
    return {
        payload: createNotification(options),
        type: ADD_WARNING
    }
}

export function addSuccess(message = {}) {
    const options = {message: `${message}`, messageType: 'SuccessMessage'};
    return {
        payload: createNotification(options),
        type: ADD_SUCCESS
    }
}

export function addSystem(message = {}) {
    const options = {message: message, messageType: 'SystemMessage'};
    return {
        payload: createNotification(options),
        type: ADD_SYSTEM
    }
}

  export function removeNotification(id) {
    return {
        payload: id,
        type: REMOVE_NOTIFICATION
    };
  }

export function clearAll(){
    return {
        type: CLEAR_ALL
    }
}
export function toggleBanner(){
    return {
        type: TOGGLE_BANNER
    }
}

export default function(state = initialState, action){
    const {payload, type}=action;
    switch(type){
        case ADD_EVENT:
            return {...state, items: [...state.items, payload]};
        case ADD_ERROR:
            return {...state, items: [...state.items, payload]};
        case ADD_WARNING:
            return {...state, items: [...state.items, payload]};
        case ADD_SUCCESS:
            return {...state, items: [...state.items, payload]};
        case ADD_SYSTEM:
            return {...state, items: [...state.items, payload]};
        case REMOVE_NOTIFICATION:
            return {...state, items: state.items.filter(item => item.id !== payload)}
        case CLEAR_ALL:
            return {...state, items: []};
        case TOGGLE_BANNER:
            return {...state, isOpen: !state.isOpen};
        default:
            return state;
    }
}

