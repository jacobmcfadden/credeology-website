import {ADD_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL, ADD_ERROR, ADD_WARNING} from '../constants/types';
import createNotification from '../factories/createNotification';
const initialState = {
    items:[],
    isOpen: false,
    isLoading: false
};

export function addNotification(options = {}) {
    return {
        payload: createNotification(options),
        type: ADD_NOTIFICATION
    };
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

export function addError(options = {}) {
    console.log(options, 'at ADD ERROR')
    return {
        payload: createNotification(options),
        type: ADD_ERROR
    }
}

export function addWarning(options = {}) {
    console.log(options)
    return {
        payload: createNotification(options),
        type: ADD_WARNING
    }
}

// export function errorReducer(state = initState, action){
//     const { error } = action;
   
//     if(error){
//     return {
//     error: error,
//     isOpen: true
//     }
//     }else if(action.type === HIDE_ERROR){
//     return {
//     error: null,
//     isOpen: false
//     }
//     }
   
//     return state;
//    }


export default function(state = initialState, action){
    const {payload, type}=action;
    switch(type){
        case ADD_WARNING:
            console.log(action.payload, 'add error non async')
            return {...state, isLoading: false, items: [payload]};
        case ADD_ERROR:
            console.log(action.payload, 'add error pend')
            return {...state, items: [action.payload]};
        case ADD_ERROR + '_FULFILLED':
            console.log(action.payload, 'add error fullfilled')
            return {...state, isLoading: false, items: action.payload};
        case ADD_ERROR + '_REJECTED':
            console.log(action.payload, 'add error rejected')
            return {...state, isLoading: false, items: action.payload};
        case ADD_NOTIFICATION + '_PENDING':
            return {...state, };
        case ADD_NOTIFICATION + '_FULFILLED':
            return {...state, };
        case ADD_NOTIFICATION + '_REJECTED':
            return {...state, };
        case REMOVE_NOTIFICATION:
            return {...state, };
        case REMOVE_NOTIFICATION + '_FULFILLED':
            return {...state, };
        case REMOVE_NOTIFICATION + '_REJECTED':
            return {...state, };
        case CLEAR_ALL + '_PENDING':
            return {...state, };
        case CLEAR_ALL + '_FULFILLED':
            return {...state, };
        case CLEAR_ALL + '_REJECTED':
            return {...state, };
        default:
            console.log(action)
            return state;
    }
}

