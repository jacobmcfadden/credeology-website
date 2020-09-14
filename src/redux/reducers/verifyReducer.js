import * as AxiosService from '../../services/AxiosService';
import {SEND_EMAIL_CODE, SEND_PHONE_CODE, VERIFY_EMAIL, VERIFY_PHONE, SET_PHONE_SKIP, GET_VER, UPDATE_TWO_FACTOR_AUTH} from '../constants/types.js';
const initialState = {
    isEmailVerified: false,
    isPhoneVerified: false,
    isPhoneVerifySkip: false,
    twoFactorAuth: false,
    isLoading: false
}

export function sendEmailCode(){
    return {
        type: SEND_EMAIL_CODE,
        payload: AxiosService.sendEmailCode()
    }
}

export function sendPhoneCode(){
    return {
        type: SEND_PHONE_CODE,
        payload: AxiosService.sendPhoneCode()
    }
}

export function verifyEmail(userInput){
    return {
        type: VERIFY_EMAIL,
        payload: AxiosService.verifyEmail(userInput)
    }
}

export function verifyPhone(userInput){
    return {
        type: VERIFY_PHONE,
        payload: AxiosService.verifyPhone(userInput)
    }
}

export function setPhoneSkip(){
    return {
        type: SET_PHONE_SKIP
    }
}

export function getVer(){
    return {
        type: GET_VER,
        payload: AxiosService.getVer()
    }
}

export function updateTwoFactorAuth(twoFactorAuth){
    return {
        type: UPDATE_TWO_FACTOR_AUTH,
        payload: AxiosService.updateTwoFactorAuth(twoFactorAuth)
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_VER + '_PENDING':
            return {...state, isLoading: true};
        case GET_VER + '_FULFILLED':
            return {...state, isLoading: false, isPhoneVerified: action.payload.data.isPhoneVerified, isEmailVerified: action.payload.data.isEmailVerified};
        case GET_VER + '_REJECTED':
            return {...state, isLoading: false};
        case UPDATE_TWO_FACTOR_AUTH + '_PENDING':
            return {...state, isLoading: true};
        case UPDATE_TWO_FACTOR_AUTH + '_FULFILLED':
            return {...state, isLoading: false, isPhoneVerified: action.payload.data.isPhoneVerified, isEmailVerified: action.payload.data.isEmailVerified, twoFactorAuth: action.payload.data.twoFactorAuth};
        case UPDATE_TWO_FACTOR_AUTH + '_REJECTED':
            return {...state, isLoading: false};
        case SEND_EMAIL_CODE + '_PENDING':
            return {...state, isLoading: true};
        case SEND_EMAIL_CODE + '_FULFILLED':
            return {...state, isLoading: false};
        case SEND_EMAIL_CODE + '_REJECTED':
            return {...state, isLoading: false};
        case SEND_PHONE_CODE + '_PENDING':
            return {...state, isLoading: true};
        case SEND_PHONE_CODE + '_FULFILLED':
            return {...state, isLoading: false};
        case SEND_PHONE_CODE + '_REJECTED':
            return {...state, isLoading: false};
        case VERIFY_PHONE + '_PENDING':
            return {...state, isLoading: true};
        case VERIFY_PHONE + '_FULFILLED':
            return {...state, isLoading: false, isPhoneVerified: action.payload.data.isPhoneVerified};
        case VERIFY_PHONE + '_REJECTED':
            return {...state, isLoading: false};
        case VERIFY_EMAIL + '_PENDING':
            return {...state, isLoading: true};
        case VERIFY_EMAIL + '_FULFILLED':
            return {...state, isLoading: false, isEmailVerified: action.payload.data.isEmailVerified};
        case VERIFY_EMAIL + '_REJECTED':
            return {...state, isLoading: false};
        case SET_PHONE_SKIP:
            return {...state, isPhoneVerifySkip: true};
        default:
            return state;
    }
}