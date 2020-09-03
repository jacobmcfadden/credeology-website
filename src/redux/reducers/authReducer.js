import axios from 'axios';

const initialState = {
    user: {},
    isAuthenticated: false,
    isPhoneVerifySkip: false,
    authMessage: '',
    isLoading: false,
    error: false
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const REGISTER_USER = 'REGISTER_USER';
const SEND_PHONE_CODE = 'SEND_PHONE_CODE';
const VERIFY_PHONE = 'VERIFY_PHONE';
const SET_PHONE_SKIP = 'SET_PHONE_SKIP';


export function registerUser(firstName, lastName, phone, email, password) {
    const user = axios.post('/auth/register', {firstName, lastName, phone, email, password})
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function loginUser(email, phone, password){
    const user = axios.post('/auth/login', {email, phone, password})
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
    return {
        type: GET_USER,
        payload: user
    }
}

export function sendPhoneCode(userId, phone){
    const user = axios.post('/verify/phone', {userId, phone})
    return {
        type: SEND_PHONE_CODE,
        payload: user
    }
}

export function verifyPhone(){
    const user = axios.put('/verify/phone')
    return {
        type: VERIFY_PHONE,
        payload: user
    }
}

export function setPhoneSkip(user){
    return {
        type: SET_PHONE_SKIP,
        payload: user
    }
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_USER + "_PENDING":
            return {...state, isLoading: true, error: false}
        case GET_USER + "_FULFILLED":
            return {...state, isLoading: false, user: action.payload.data, error: false, isAuthenticated: true}
        case GET_USER + "_REJECTED":
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case LOGIN_USER + '_PENDING':
            return {...state, isLoading: true, error: false}
        case LOGIN_USER + '_FULFILLED':
            return {...state, isLoading: false, user: action.payload.data, error: false, isAuthenticated: true}
        case LOGIN_USER + '_REJECTED':
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case LOGOUT_USER + '_PENDING':
            return {...state, isLoading: true, error: false}
        case LOGOUT_USER + '_FULFILLED':
            return {...state, isLoading: false, ...action.payload, error: false, isAuthenticated: false, authMessage: action.payload.response.data}
        case LOGOUT_USER + '_REJECTED':
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case REGISTER_USER + '_PENDING':
            return {...state, isLoading: true, error: false}
        case REGISTER_USER + '_FULFILLED':
            return {...state, isLoading: false, user: action.payload.data, error: false, isAuthenticated: true}
        case REGISTER_USER + '_REJECTED':
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case SEND_PHONE_CODE + '_PENDING':
            return {...state, isLoading: true, error: false}
        case SEND_PHONE_CODE + '_FULFILLED':
            return {...state, isLoading: false, error: false, authMessage: action.payload.response.data}
        case SEND_PHONE_CODE + '_REJECTED':
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case VERIFY_PHONE + '_PENDING':
            return {...state, isLoading: true, error: false}
        case VERIFY_PHONE + '_FULFILLED':
            return {...state, isLoading: false, user: action.payload.data, error: false, isAuthenticated: true}
        case VERIFY_PHONE + '_REJECTED':
            return {...state, isLoading: false, error: true, authMessage: action.payload.response.data}
        case SET_PHONE_SKIP:
            return {...state, isPhoneVerifySkip: true}
        default:
            return initialState;
    }
}