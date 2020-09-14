import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {getVer} from '../redux/reducers/verifyReducer';
import {addSystem} from '../redux/reducers/notificationReducer';

const VerifyRoute = (props) => {
    const {getVer,
        addSystem, 
        isAuthenticated, 
        verId,
        isEmailVerified, 
        isPhoneVerified, 
        isPhoneVerifySkip, 
        component: Component, 
        ...rest} = props;
       
    useEffect(() => {
            getVer().then((res)=>{
            }).catch((err)=>{
                addSystem('Please verify you credentials.')
            })
        return function cleanup() {
            getVer()
        } 
    }, [getVer, isAuthenticated, isEmailVerified, isPhoneVerified, addSystem]);
    
    if(isAuthenticated) {
        if(isEmailVerified && (isPhoneVerified || isPhoneVerifySkip)) {
            return (<Redirect push to={'/app'} />);
        } else {
            return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
        }
    } else {
        return (<Redirect push to={'/auth'} />);
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  verId: state.ver.id,
  isEmailVerified: state.ver.isEmailVerified,
  isPhoneVerified: state.ver.isPhoneVerified,
  isPhoneVerifySkip: state.ver.isPhoneVerifySkip
});

export default connect(mapStateToProps, {getVer, addSystem})(VerifyRoute);