import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const AppRoute = (props) => {
    const { 
        isAuthenticated, 
        isEmailVerified, 
        isPhoneVerified, 
        isPhoneVerifySkip, 
        component: Component, 
        ...rest} = props;

    if(isAuthenticated) {
        if(isEmailVerified && (isPhoneVerified || isPhoneVerifySkip)) {
            return (<Route {...rest} render={(props) => (<Component {...props} />)} />);
        } else {
            return (<Redirect push to="/verify" />);
        }
    } else {
        return (<Redirect push to="/auth" />);
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.user.isEmailVerified,
  isPhoneVerified: state.auth.user.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip
});

export default connect(mapStateToProps)(AppRoute);