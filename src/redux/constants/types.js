// notificationReducer
export const ADD_EVENT = "ADD_EVENT";
export const ADD_ERROR = "ADD_ERROR";
export const ADD_WARNING = "ADD_WARNING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_SYSTEM = "ADD_SYSTEM";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const CLEAR_ALL = "CLEAR_ALL";
export const TOGGLE_BANNER = "TOGGLE_BANNER";

// auth reducer
export const LOGIN_USER = {type: 'LOGIN_USER', error: {message: 'Login unsuccessful, credentials entered were invalid.', messageType: 'ErrorMessage'}, success: {message: 'GET_USER SUCCESS', messageType: 'SuccessMessage'}};
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_USER = {type: 'GET_USER', error: {message: 'Welcome, please login or signup.', messageType: 'SystemMessage'}, success: {message: 'GET_USER SUCCESS', messageType: 'SystemMessage'}};
export const REGISTER_USER = 'REGISTER_USER';
export const RECOVER_ACCOUNT = 'RECOVER_ACCOUNT';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const RESET_PASSWORD = 'RESET_PASSWORD';

// verificationReducer
export const SEND_EMAIL_CODE = 'SEND_EMAIL_CODE';
export const SEND_PHONE_CODE = 'SEND_PHONE_CODE';
export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const VERIFY_PHONE = 'VERIFY_PHONE';
export const SET_PHONE_SKIP = 'SET_PHONE_SKIP';
export const UPDATE_TWO_FACTOR_AUTH = 'UPDATE_TWO_FACTOR_AUTH';
export const TWO_FACTOR_AUTHENTICATION = 'TWO_FACTOR_AUTHENTICATION';
