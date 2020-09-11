import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {getUser} from '../redux/reducers/authReducer';

const AuthRoute = (props) => {
    const {getUser, 
        isAuthenticated, 
        isEmailVerified, 
        isPhoneVerified, 
        isPhoneVerifySkip, 
        component: Component, 
        ...rest} = props;
       
    useEffect(() => {
        getUser()
        return function cleanup() {
            getUser()
        } 
    }, [getUser]);

    if(isAuthenticated) {
        if(isEmailVerified && (isPhoneVerified || isPhoneVerifySkip)) {
            return (<Redirect push to={'/app/portal'} />);
        } else {
            return (<Redirect push to={'/verify'} />);
        }
    } else {
        return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.user.isEmailVerified,
  isPhoneVerified: state.auth.user.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip
});

export default connect(mapStateToProps, {getUser})(AuthRoute);