// import isPromise from 'is-promise';

// const getUser = /^GET_USER/i;

export default function errorMiddleware(){
    return next => action => {

        // // IF NOT A PROMISE GO TO NEXT
        // if (!isPromise(action.payload)) {
        //     // action.payload.data
        //     return next(action);
        // }

        // console.log('PROMISE FOUND IN NOTIFICATION MIDDLEWARE: action.type', action.type);
        // if (action.type.match(getUser)) {       
        //      // Dispatch initial pending promise, but catch any errors
        //     console.log('MAIN IF just caught:', action.type)
        //     return next(action).catch(err => console.log('MAIN IF ERROR:', action.payload))
        // }

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