import React, {useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'underscore';
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
        getUser().then(res => {}).catch(err => {})
        return function cleanup() {
            getUser()
        } 
    }, [getUser, isAuthenticated]);
    
    const protectedRoutes = {
        auth: {isAuthenticated: false, isVerified: false},
        verify: {isAuthenticated: true, isVerified: false},
        app: {isAuthenticated: true, isVerified: true}
    }
    
    const verifyUser = () => {
        if((isPhoneVerified === true || isPhoneVerifySkip === true) && isEmailVerified === true) {
            return true;
        } else {
            return false;
        }
    }
    
    const findRoute = () => {
        if(_.isMatch({isAuthenticated: isAuthenticated, isVerified: verifyUser()}, _.property('app')(protectedRoutes))) {
            return 'app';
        } else if(_.isMatch({isAuthenticated: isAuthenticated, isVerified: verifyUser()}, _.property('verify')(protectedRoutes))) {
            return 'verify';
        } else if (_.isMatch({isAuthenticated: isAuthenticated, isVerified: verifyUser()}, _.property('auth')(protectedRoutes))) {
            return 'auth';
        } else {
            return 'Not Found';
        }
    }
    
    const location = useLocation();
    const currentRoute = location.pathname.split('/');
    const currentRouteRequirements = _.propertyOf(protectedRoutes)(currentRoute[1]);

    if(_.isEqual(currentRouteRequirements, {isAuthenticated: isAuthenticated, isVerified: verifyUser()})) {
        return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
    } else {
        switch(findRoute()){
            case 'app':
                return (<Redirect push to={'/app'} />);
            case 'verify':
                return (<Redirect push to={'/verify'} />);
            default:
                return (<Redirect push to={'/auth'} />);
            }
        
    }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.isEmailVerified,
  isPhoneVerified: state.auth.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip,
});

export default connect(mapStateToProps, {getUser})(AuthRoute);