import axios from 'axios';

export function registerUser(firstName, lastName, phone, email, password) {
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

export function sendEmailCode(userId, email){
    return axios.post('/verify/email', {userId, email})
}

export function sendPhoneCode(userId, phone){
    return axios.post('/verify/phone', {userId, phone})
}

export function verifyEmail(userId, email, userInput){
    return axios.put('/verify/email', {userId, email, userInput})
}

export function verifyPhone(userId, phone, userInput){
    return axios.put('/verify/phone', {userId, phone, userInput})
}
