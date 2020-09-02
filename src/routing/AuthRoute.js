import React, { useEffect } from 'react';
import {Route, useHistory, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/reducers/authReducer';

// already had example

const AuthRoute = (props) => {
    let authLogin = "/auth/login";
    let authVerify = "/auth/verify";
    let appAll = "/app";
    let history = useHistory();
    const { component: Component, ...rest } = props;

    useEffect(() => {
        Authentication();
        return function cleanup() {
          Authentication();
        }
      });


    const Authentication = () => {
          props.getUser();
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

    switch(props.computedMatch.path){
        case appAll:
            console.log("case app");
            if(Authentication() === true) {
                if(EmailVerification() === true && PhoneVerification() === true) {
                    return <Route {...rest} render={(props) => (<Component {...props} />)} />
                } else {
                    history.push("auth/verify")
                }
            } else {
                history.push("/auth/login")
            }    
        case authLogin:
            console.log("case authLogin");
            if(Authentication() === true) {
                if(EmailVerification() === true && PhoneVerification() === true) {
                    history.push("/app");
                } else {
                    history.push("auth/verify");
                }
            } else {
               return <Route {...rest} render={(props) => (<Component {...props} />)} /> ;
            } ;         
            case authVerify:
                console.log("case authV");
                if(Authentication() === true) {
                    if(EmailVerification() === true && PhoneVerification() === true) {
                        history.push("/app");
                    } else {
                        return <Route {...rest} render={(props) => (<Component {...props} />)} />;
                    }
                } else {
                    history.push("/auth/login");
                } 
        default:
            return <Route {...rest} render={(props) => (<Component {...props} />)} />
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.isEmailVerified,
  isPhoneVerified: state.auth.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip
});

export default connect(mapStateToProps, {getUser})(AuthRoute);