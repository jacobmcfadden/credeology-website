import axios from 'axios';

// AUTH CALLS
export async function registerUser(firstName, lastName, phone, email, password) {
    return axios.post('/auth/register', {firstName, lastName, phone, email, password})
}

export function loginUser(email, phone, password){
    return axios.post('/auth/login', {email, phone, password})
}

export function logoutUser(){
    return axios.post('/auth/logout')
}

export function getUser(){
    return axios.get('/auth/user')
}

// VERIFICATION CALLS
export function getVer(){
    return axios.get('/verify')
}

export function sendEmailCode(){
    return axios.post('/verify/email')
}

export function sendPhoneCode(){
    return axios.post('/verify/phone')
}

export function verifyEmail(userInput){
    return axios.put('/verify/email', {userInput})
}

export function verifyPhone(userInput){
    return axios.put('/verify/phone', {userInput})
}

export function updateTwoFactorAuth(twoFactorAuth){
    return axios.put('/verify/tfa', {twoFactorAuth})
}
