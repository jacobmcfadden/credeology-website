import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {getUser} from '../redux/reducers/authReducer';
import {addSystem} from '../redux/reducers/notificationReducer';

const AuthRoute = (props) => {
    const {getUser,
        addSystem,
        isAuthenticated, 
        isEmailVerified, 
        isPhoneVerified, 
        isPhoneVerifySkip, 
        component: Component, 
        ...rest} = props;
    
    useEffect(() => {
        getUser().then((res)=>{
            addSystem('You were still logged in, Welcome back!')
        }).catch((err)=>{
            addSystem('Welcome! Please login or signup.')
        })
        return function cleanup() {
            getUser()
        } 
    }, [getUser, addSystem]);

    if(isAuthenticated) {
        if(isEmailVerified && (isPhoneVerified || isPhoneVerifySkip)) {
            return (<Redirect push to={'/app'} />);
        } else {
            return (<Redirect push to={'/verify'} />);
        }
    } else {
        return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.ver.isEmailVerified,
  isPhoneVerified: state.ver.isPhoneVerified,
  isPhoneVerifySkip: state.ver.isPhoneVerifySkip
});

export default connect(mapStateToProps, {getUser, addSystem})(AuthRoute);