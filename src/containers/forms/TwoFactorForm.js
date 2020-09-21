import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verifyPhone, sendPhoneCode, twoFactorAuthentication} from '../../redux/reducers/authReducer';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import SixDigitButton from '../../components/inputs/SixDigitInput';
import FormButton from '../../components/buttons/FormButton';

const TwoFactorForm = (props) => {
    const [phoneCodeSent, setPhoneCodeSent] = useState(false)
  
    const sendPhoneCode = (event) => {
        props.sendPhoneCode().then(() => {
            setPhoneCodeSent(true);
            props.addSuccess('Phone verification code has been sent!')
        }).catch ((err) => {
            props.addError('Phone verification code was not sent!')
        })

    };

    const twoFactorAuthentication = (code) => {
        props.twoFactorAuthentication(code).then((res) => {
            props.addSuccess('Phone has been verified!')
        }).catch ((err) => {
            props.addError('Phone code invalid, please try again.')
        });
    }
   
    return (
    <div className=" container__row justify-center">      
        <p className={`Subtitle-primary align-text`}>Two-Factor Authentication</p>

        <div className="container__row m-t-1">
            <div className="container__col-12">
                <p className={`Phrase align-text`}>Credeology will send a verification code to phone number:</p>
            </div>
        </div>
        <div className="container__row">
            <div className="container__col-12">
                <p className={`Phrase-primary align-text m-t-50 m-b-1`}>{props.phone}</p>
            </div>
        </div>
                <SixDigitButton 
                    show={phoneCodeSent}
                    goalMet={props.isAuthenticated}
                    handleCode={twoFactorAuthentication}
                />
        <div className="container__row m-v-50">
            <div className="container__col-12">
                <FormButton 
                    name="phone"
                    disable={phoneCodeSent}
                    goalMet={props.isAuthenticated}
                    displayText={'AUTHENTICATE'}
                    styling={'btn-std-lg-orange'}
                    handleClick={sendPhoneCode}
                />
            </div>
        </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isPhoneVerified: state.auth.isPhoneVerified,
    isTwoFactorAuth: state.auth.twoFactorAuth,
    isLoading: state.auth.isLoading,
    phone: state.auth.user.phone
  });

export default connect(mapStateToProps, {verifyPhone, sendPhoneCode, addError, addSuccess, addWarning, twoFactorAuthentication})(TwoFactorForm);