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
  isEmailVerified: state.ver.isEmailVerified,
  isPhoneVerified: state.ver.isPhoneVerified,
  isPhoneVerifySkip: state.ver.isPhoneVerifySkip
});

export default connect(mapStateToProps)(AppRoute);