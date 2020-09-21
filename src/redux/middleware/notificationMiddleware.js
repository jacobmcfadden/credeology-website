import isPromise from 'is-promise';
// import _ from 'underscore';
import {GET_USER, LOGIN_USER} from '../constants/types';
import {addSystem} from '../reducers/notificationReducer';

export default function errorMiddleware(store){
    return next => action => {

        // IF NOT A PROMISE BLOCK
        if (!isPromise(action.payload)) {
            return next(action)
        }
        // IF IT REACHES THIS POINT IT IS SOME FORM OF A PROMSIE
        // HERE I AM ADDED A CATCH, TO CATCH ANY ERRORS AND SEND OUT A USER NOTIFICATION
        // BUT ONLY FOR THE ACTION TYPES I HAVE SET UP A VALUE FOR
        switch(action.type){
            case GET_USER.type:
                return next(action).catch((err) =>  {store.dispatch(addSystem(GET_USER.error))});
            case LOGIN_USER.type:
                return next(action).catch(() =>  {store.dispatch(addSystem(LOGIN_USER.error))});
            default:
                return next(action);
        }

    } 
}
