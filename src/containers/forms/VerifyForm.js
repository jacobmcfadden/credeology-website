import React from 'react';
import {connect} from 'react-redux';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import VerifyEmailForm from './VerifyEmailForm';
import VerifyPhoneForm from './VerifyPhoneForm';

const VerifyForm = (props) => {  
    
    return (
    <div className="VerifyForm container__col-12 m-t-1">
        {/* TITLE */}
        <div className="container__row">
            <p className="container__col-12 title">ACCOUNT VERIFICATION</p>
        </div>
        <VerifyEmailForm/>
        <VerifyPhoneForm/>
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.ver.isEmailVerified,
    isPhoneVerified: state.ver.isPhoneVerified,
    isPhoneVerifySkip: state.ver.isPhoneVerifySkip,
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {addError, addSuccess, addWarning})(VerifyForm);