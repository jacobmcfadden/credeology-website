import React from 'react';
import {connect} from 'react-redux';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import {setIsAuthenticated} from '../../redux/reducers/authReducer';
import VerifyEmailForm from './VerifyEmailForm';
import VerifyPhoneForm from './VerifyPhoneForm';

const VerifyForm = (props) => {  
  const {isAuthenticated, isEmailVerified, isPhoneVerified} = props;
  
  return (
  <div className="VerifyForm container__row m-t-2 m-h-1">
      <div className="VerifyForm container__row m-t-2">
        {/* TITLE */}
        <div className="container__row justify-center m-b-50">
            <p className="Subtitle-primary align-text">Account Verification</p>
        </div>       
        {isEmailVerified && isAuthenticated ? <div></div> : <VerifyEmailForm/>}
        {isPhoneVerified && isAuthenticated ? <div></div> : <VerifyPhoneForm/>}
      </div>

  </div>
);
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.auth.isEmailVerified,
    isPhoneVerified: state.auth.isPhoneVerified
  });

export default connect(mapStateToProps, {setIsAuthenticated, addError, addSuccess, addWarning})(VerifyForm);