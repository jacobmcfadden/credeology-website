import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verifyPhone, sendPhoneCode, sendEmailCode, setPhoneSkip, verifyEmail} from '../../redux/reducers/verifyReducer';
import * as RegexService from '../../services/RegexService';

import SixDigitButton from '../../components/inputs/SixDigitInput';
import FormButton from '../../components/buttons/FormButton';

const VerifyForm = (props) => {
    const [emailCodeSent, setEmailCodeSent] = useState(false); 
    const [phoneCodeSent, setPhoneCodeSent] = useState(false)
  
    const sendEmailCode = async (event) => {
        const sentCode = await props.sendEmailCode(props.userId, props.email);
        if(sentCode) {
            setEmailCodeSent(true);
        } else {
            setEmailCodeSent(false);
        }
    }

    const sendPhoneCode = async (event) => {
        const sentCode = await props.sendPhoneCode(props.userId, props.phone);
        if(sentCode) {
            setPhoneCodeSent(true);
        } else {
            setPhoneCodeSent(false);
        }
    };

    const verifyEmail = async (code) => {
        const success = await props.verifyEmail(props.userId, props.email, code);
            if(success) {
                console.log('verifyEmail worked');
            } else {
                console.log('verifyEmail failed')
            }
    }

    const verifyPhone = async (code) => {
        const success = await props.verifyEmail(props.userId, props.phone, code);
            if(success) {
                console.log('verifyPhone worked');
            } else {
                console.log('verifyphone failed!')
            }
    }

    const setPhoneSkip = (event) => {
        console.log(`Click Hit with ${event}`)
        return props.setPhoneSkip();
    };
    
    return (
    <div className="VerifyForm container__col-12 m-t-1">
        {/* TITLE */}
        <div className="container__row">
            <p className="container__col-12 title">ACCOUNT RECOVERY</p>
        </div>
        {/* EMAIL VERIFICATION SECTION */}
        <div className="m-v-2">
            <p className="uppercase-title container__row-center">EMAIL VERIFICATION</p>
            <p className="caption container__row-center m-t-1">Credeology will send a verification code to email address:</p>
            <p className="caption-blue container__row-center">{props.email}</p>
            <span className="container__row-center m-v-1">
                <SixDigitButton 
                    show={emailCodeSent}
                    handleCode={verifyEmail}
                />
                <div className="container__col-12 link">
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
        {/* PHONE VERIFICATION SECTION */}
        <div className="m-v-2">
            
            <p className="uppercase-title container__row-center">PHONE VERIFICATION</p>
            <p className={`caption m-t-1 container__row-center ${props.isPhoneVerified ? 'hidden' : ''}`}>Credeology will send a verification code to phone number:</p>
            <p className={`caption-blue container_row-center ${props.isPhoneVerified ? 'hidden' : ''}`}>{RegexService.formatInput(props.phone, 'phone')}</p>
  
            <span className="container__row-center m-t-1">
                <SixDigitButton 
                    show={phoneCodeSent}
                    handleCode={verifyPhone}
                />
                <div className="container__col-12 link">
                    <FormButton 
                        name="phone"
                        disable={phoneCodeSent}
                        goalMet={props.isPhoneVerified}
                        displayText={'Text me the code'}
                        styling={'btn-std-lg-orange'}
                        handleClick={sendPhoneCode}
                    />
                </div>
            </span> 
            <span className="container__row-center m-t-1">
                <div className="container__col-12 link">
                    <FormButton 
                        name="skip"
                        goalMet={props.isPhoneVerifySkip}
                        hide={props.isPhoneVerified}
                        displayText={'Remind me later'} 
                        styling={'btn-frm-lg-orange'}
                        handleClick={setPhoneSkip}
                    />
                </div>
            </span>       
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.ver.isEmailVerified,
    isPhoneVerified: state.ver.isPhoneVerified,
    isPhoneVerifySkip: state.ver.isPhoneVerifySkip,
    userId: state.auth.user.id,
    phone: state.auth.user.phone,
    email: state.auth.user.email,
    isLoading: state.auth.isLoading,
  });

export default connect(mapStateToProps, {verifyPhone, verifyEmail, sendEmailCode, sendPhoneCode, setPhoneSkip})(VerifyForm);