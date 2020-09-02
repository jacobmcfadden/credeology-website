

const initialState = {
    organizations: {}
}

const GET_ORG = 'GET_ORG';

export default function(state = initialState, action){
    switch(action.type){
        case GET_ORG + "_PENDING":
            return state
        case GET_ORG + "_FULFILLED":
            return {...state, organizations: action.payload.data}
        case GET_ORG + "_REJECTED":
            return initialState
        default:
            return initialState
    }
}