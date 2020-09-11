import * as AxiosService from '../../services/AxiosService';
import {REGISTER_USER, LOGIN_USER, LOGOUT_USER, GET_USER} from '../constants/types';

const initialState = {
    user: {},
    isAuthenticated: false,
    isLoading: false
}


export function registerUser(firstName, lastName, phone, email, password) {

    return {
        type: REGISTER_USER,
        payload: AxiosService.registerUser(firstName, lastName, phone, email, password)
    }
}

export function loginUser(email, phone, password){
    return {
        type: LOGIN_USER,
        payload: AxiosService.loginUser({email, phone, password})
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: AxiosService.logoutUser()
    }
}

export function getUser(){
    return {
        type: GET_USER,
        payload: AxiosService.getUser()
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER + "_PENDING":
            return {...state, isLoading: true};
        case GET_USER + "_FULFILLED":
            return {...state, isLoading: false, user: action.payload.data, isAuthenticated: true};
        case GET_USER + "_REJECTED":
            return {...state, isLoading: false};
        case LOGIN_USER + '_PENDING':
            return {...state, isLoading: true};
        case LOGIN_USER + '_FULFILLED':
            return {...state, isLoading: false, user: action.payload.data, isAuthenticated: true};
        case LOGIN_USER + '_REJECTED':
            return {...state, isLoading: false};
        case LOGOUT_USER + '_PENDING':
            return {...state, isLoading: true};
        case LOGOUT_USER + '_FULFILLED':
            return {...state, isLoading: false, ...action.payload, isAuthenticated: false};
        case LOGOUT_USER + '_REJECTED':
            return {...state, isLoading: false};
        case REGISTER_USER + '_PENDING':
            return {...state, isLoading: true};
        case REGISTER_USER + '_FULFILLED':
            return {...state, isLoading: false, user: action.payload.data, isAuthenticated: true};
        case REGISTER_USER + '_REJECTED':
            return {...state, isLoading: false};
        default:
            return state;
    }
}