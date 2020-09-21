import React, {useState} from 'react';
import {connect} from 'react-redux';
import {sendEmailCode, verifyEmail} from '../../redux/reducers/authReducer';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import SixDigitButton from '../../components/inputs/SixDigitInput';
import FormButton from '../../components/buttons/FormButton';

const VerifyEmailForm = (props) => {
    const [emailCodeSent, setEmailCodeSent] = useState(false); 
  
    const sendEmailCode = (event) => {
        props.sendEmailCode().then((res) => {
            setEmailCodeSent(true);
            props.addSuccess('Email verification code has been sent!')
        }).catch ((err) => {
            props.addError('Email verification code was not sent!')
        })
    }

    const verifyEmail = (code) => {
        props.verifyEmail(code, props.email).then(() => {
            props.addSuccess('Email has been verified!')
        }).catch ((err) => {
            props.addError('Email code invalid, please try again.')
        })
    }
    
    return (
    <div className="VerifyForm container__col-12 m-t-1">
        {/* EMAIL VERIFICATION SECTION */}
        <div className="container__row justify-center m-b-1">
            <p className="Subtitle">Email Verification</p>
            <p className="Phrase align-text m-t-1">Credeology will send a verification code to email address:</p>
            <p className="Phrase-primary container__row justify-center m-t-50 m-b-1">{props.email}</p>
            <span className="container__row justify-center">
                <SixDigitButton 
                    show={emailCodeSent}
                    goalMet={props.isEmailVerified}
                    handleCode={verifyEmail}
                />
                <div className="container__col-12 m-t-50">
                    <FormButton 
                        name="email" 
                        disable={emailCodeSent}
                        goalMet={props.isEmailVerified}
                        displayText={'Email me the code'}
                        styling={'btn-std-lg-orange'}
                        handleClick={sendEmailCode}
                    />
                </div>
            </span>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.auth.isEmailVerified,
    email: state.auth.user.email,
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {verifyEmail, sendEmailCode, addError, addSuccess, addWarning})(VerifyEmailForm);