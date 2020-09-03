import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

// already had example

const AuthRoute = (props) => {

    let authLogin = "/auth/login";
    let authVerify = "/auth/verify";
    let appAll = "/app/*";
    // let authAll = "/auth/*";

    const { component: Component, ...rest } = props;

    const Authentication = () => {
        if(props.isAuthenticated === true) {
            return true;
        } else {
            return false;
        } 
    };

    const EmailVerification = () => {
        if(props.isEmailVerified === true) {
            return true;
        } else {
            return false;
        }
    }
    const PhoneVerification = () => {
        if(props.isPhoneVerified === true ||  props.isPhoneVerifySkip === true) {
            return true;
        } else {
            return false;
        }
    }

    if(props.computedMatch.path.includes(appAll)){
        if(Authentication() === true) {
            if(EmailVerification() === true && PhoneVerification() === true) {
                return (<Route {...rest} render={(props) => (<Component {...props} />)} />);
            } else {
                return (<Redirect push to="/auth/verify" />);
            }
        } else {
            return (<Redirect push to="/auth/login" />);
        }
    } else if (props.computedMatch.path.includes(authLogin)){
        if(Authentication() === true) {
            if(EmailVerification() === true && PhoneVerification() === true) {
               return (<Redirect push to={appAll} />);
            } else {
               return (<Redirect push to={authVerify} />);
            }
        } else {
            return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
        }
    } else if (props.computedMatch.path.includes(authVerify)) {
        if(Authentication() === true) {
            if(EmailVerification() === true && PhoneVerification() === true) {
               return (<Redirect push to={appAll} />);
            } else {
                return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
            }
        } else {
        return (<Redirect push to={authLogin} />);
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

export default connect(mapStateToProps)(AuthRoute);