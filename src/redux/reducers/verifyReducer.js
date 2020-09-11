import * as AxiosService from '../../services/AxiosService';
import {SEND_EMAIL_CODE, SEND_PHONE_CODE, VERIFY_EMAIL, VERIFY_PHONE, SET_PHONE_SKIP} from '../constants/types.js';
const initialState = {
    isEmailVerified: false,
    isPhoneVerified: false,
    isPhoneVerifySkip: false,
    isLoading: false,
    warning: [],
    error: []
}


export function sendEmailCode(userId, email){
    return {
        type: SEND_EMAIL_CODE,
        payload: AxiosService.sendEmailCode({userId, email})
    }
}

export function sendPhoneCode(userId, phone){
    return {
        type: SEND_PHONE_CODE,
        payload: AxiosService.sendPhoneCode({userId, phone})
    }
}

export function verifyEmail(userId, email, userInput){
    return {
        type: VERIFY_EMAIL,
        payload: AxiosService.verifyEmail({userId, email, userInput})
    }
}

export function verifyPhone(userId, phone, userInput){
    return {
        type: VERIFY_PHONE,
        payload: AxiosService.verifyPhone({userId, phone, userInput})
    }
}

export function setPhoneSkip(){
    return {
        type: SET_PHONE_SKIP
    }
}

export default function(state = initialState, action){
    switch(action.type){
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
            return {...state, isLoading: false, isPhoneVerified: action.payload.data.verify_phone};
        case VERIFY_PHONE + '_REJECTED':
            return {...state, isLoading: false};
        case VERIFY_EMAIL + '_PENDING':
            return {...state, isLoading: true};
        case VERIFY_EMAIL + '_FULFILLED':
            return {...state, isLoading: false, isEmailVerified: action.payload.data.verify_email};
        case VERIFY_EMAIL + '_REJECTED':
            return {...state, isLoading: false};
        case SET_PHONE_SKIP:
            return {...state, isPhoneVerifySkip: true};
        default:
            return state;
    }
}