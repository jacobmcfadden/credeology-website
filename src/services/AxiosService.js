import axios from 'axios';

// AUTH CALLS
export function registerUser(firstName, lastName, phone, email, password) {
    return axios.post('/auth/register', {firstName, lastName, phone, email, password})
}

export function loginUser(contact, password){
    return axios.post('/auth/login', {contact, password})
}

export function logoutUser(){
    return axios.post('/auth/logout')
}

export function getUser(){
    return axios.get('/auth/user')
}

export function recoverAccount(email){
    return axios.post('/auth/recover', {email})
}

export function resetPassword(password, email){
    return axios.put('/auth/reset', {password, email})
}

// VERIFICATION CALLS
export function getVer(){
    return axios.get('/verify')
}

export function sendEmailCode(contact){
    return axios.post('/verify/email', {contact})
}

export function sendPhoneCode(){
    return axios.post('/verify/phone')
}

export function verifyEmail(userInput, contact){
    return axios.put('/verify/email', {userInput, contact})
}

export function verifyPhone(userInput){
    return axios.put('/verify/phone', {userInput})
}

export function updateTwoFactorAuth(twoFactorAuth){
    return axios.put('/auth/tfa', {twoFactorAuth})
}

export function twoFactorAuthentication(userInput){
    return axios.post('/verify/tfa', {userInput})
}

