import isPromise from 'is-promise';
import _ from "underscore";
import {addError, addWarning} from '../reducers/notificationReducer';
import {GET_USER} from '../constants/types';

const getIt = /^GET_USER/i;

export default function errorMiddleware(){
    return next => action => {
        // If not a promise, continue on
        if (!isPromise(action.payload)) {
            return next(action);
        }
        console.log('errorMiddleware: action.type', action.type);
        if (action.type) {       
             // Dispatch initial pending promise, but catch any errors
            
        return next(action).catch(error => {
            console.log('catching action', error);
            return addError({message: 'Golfstream', messageType: "ErrorMsg"})
        });
        }

        return next(action);

        // return next(action);
        // switch(action.type){
        //     case GET_USER + "_PENDING":
        //         return next(action).catch(error => console.log(error));
        //     case GET_USER + "_FULFILLED":
        //         return next(action).catch(action => console.log(action));
        //     case GET_USER + "_REJECTED":
        //         return next(action).catch(action => console.log(action));
        //     default:
        //         return next(action);
        // }
    } 
}