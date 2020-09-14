import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verifyPhone, sendPhoneCode, setPhoneSkip} from '../../redux/reducers/verifyReducer';
import * as RegexService from '../../services/RegexService';
import {addWarning, addSuccess, addError} from '../../redux/reducers/notificationReducer';
import SixDigitButton from '../../components/inputs/SixDigitInput';
import FormButton from '../../components/buttons/FormButton';

const VerifyPhoneForm = (props) => {
    const [phoneCodeSent, setPhoneCodeSent] = useState(false)
  
    const sendPhoneCode = (event) => {
        props.sendPhoneCode(props.userId, props.phone).then(() => {
            setPhoneCodeSent(true);
            props.addSuccess('Phone verification code has been sent!')
        }).catch ((err) => {
            props.addError('Phone verification code was not sent!')
        })

    };

    const verifyPhone = (code) => {
        props.verifyPhone(code).then(() => {
            props.addSuccess('Phone has been verified!')
        }).catch ((err) => {
            props.addError('Phone code invalid, please try again.')
        });
    }

    const setPhoneSkip = (event) => {
        console.log(`Click Hit with ${event}`)
        return props.setPhoneSkip();
    };
    
    return (
    <div className="VerifyForm container__col-12 m-t-1">
        {/* PHONE VERIFICATION SECTION */}
        <div className="m-t-2">
            
            <p className="uppercase-title container__row-center">PHONE VERIFICATION</p>
            <p className={`caption container__row justify-center m-t-1 ${props.isPhoneVerified ? 'hidden' : ''}`}>Credeology will send a verification code to phone number:</p>
            <p className={`caption-blue container_row align-text m-b-1 ${props.isPhoneVerified ? 'hidden' : ''}`}>{RegexService.formatInput(props.phone, 'phone')}</p>
  
            <span className="container__row-center">
                <SixDigitButton 
                    show={phoneCodeSent}
                    goalMet={props.isPhoneVerified}
                    handleCode={verifyPhone}
                />
                <div className="container__col-12 m-t-1">
                    <FormButton 
                        name="phone"
                        disable={phoneCodeSent}
                        goalMet={props.isPhoneVerified || props.isPhoneVerifySkip}
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
    isPhoneVerified: state.ver.isPhoneVerified,
    isPhoneVerifySkip: state.ver.isPhoneVerifySkip,
    isLoading: state.auth.isLoading,
    phone: state.auth.user.phone
  });

export default connect(mapStateToProps, {verifyPhone, sendPhoneCode, setPhoneSkip, addError, addSuccess, addWarning})(VerifyPhoneForm);