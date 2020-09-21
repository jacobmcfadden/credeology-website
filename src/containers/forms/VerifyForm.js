import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import {setIsAuthenticated} from '../../redux/reducers/authReducer';
import VerifyEmailForm from './VerifyEmailForm';
import VerifyPhoneForm from './VerifyPhoneForm';
import TwoFactorForm from './TwoFactorForm';

const VerifyForm = (props) => {  
  const {isLoggedIn, isAuthenticated, isEmailVerified, isPhoneVerifySkip, isPhoneVerified, isTwoFactorAuth, setIsAuthenticated} = props;
  
  const twoFactorElements = () => {
    if (props.isTwoFactorAuth === false) {
      return (
      <div className="VerifyForm container__row m-t-2">
        {/* TITLE */}
        <div className="container__row justify-center m-b-50">
            <p className="Subtitle-primary align-text">Account Verification</p>
        </div>       
        <VerifyEmailForm/>
        <VerifyPhoneForm/>
      </div>
      );
    }
  }

    return (
    <div className="VerifyForm container__row m-t-2 m-h-1">
        <div className="container__row justify-center">
          <p className="Subtitle-primary align-text"></p>
        </div>    
        <TwoFactorForm/>          
        {twoFactorElements()}
    </div>
  );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.auth.isEmailVerified,
    isPhoneVerified: state.auth.isPhoneVerified,
    isPhoneVerifySkip: state.auth.isPhoneVerifySkip,
    isTwoFactorAuth: state.auth.isTwoFactorAuth,
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {setIsAuthenticated, addError, addSuccess, addWarning})(VerifyForm);