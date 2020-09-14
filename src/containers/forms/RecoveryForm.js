import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verifyPhone, sendPhoneCode, sendEmailCode, verifyEmail} from '../../redux/reducers/verifyReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';

const RecoveryForm = (props) => {
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneInvalid, setPhoneInvalid] = useState(false);

    const onInputChange = (event) => {
        if(event.target.name === "email") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setEmail(event.target.value);
                setEmailInvalid(false);
            } else {
                // the format check failed
                setEmail(event.target.value);
                setEmailInvalid(true);
            }
        } else if(event.target.name === "phone") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setPhone(event.target.value);
                setPhoneInvalid(false);
            } else {
                // the format check failed
                setPhone(event.target.value);
                setPhoneInvalid(true);
            }
        }
    }

  return (
    <div className="RecoveryForm container m-t-2">
        {/* TITLE */}
        <div className="container__row">
            <p className="container__col-12 title">ACCOUNT RECOVERY</p>
        </div>
        {/* INSTRUCTIONAL P TAG */}
        <div className="container__row m-t-1">
            <div className="container__col-12">
                <p className="caption align-text">Please enter your email or phone linked to your account.</p>
            </div>
        </div>
        {/* EMAIL INPUT */}
        <div className="container__row m-t-1">
            <div className="container__col-12">
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={emailInvalid}
                    inputId={'email'}
                    name={'email'}
                    value={RegexService.formatInput(email, 'email')}
                    type={'email'}
                    placeholder={'Email Address'}
                    required={true}
                    handleClick={onInputChange}
                    label={'Email Address'}
                    validationMessage={'Email incorrect, please revise.'}
                />
            </div> 
        </div>
        {/* AND DIVIDER LINE */}
        <div className="container__row">
            <div className="container__col-12">
                <div className="container__row">
                    <hr className="container__col-5 divider-line"/>
                    <p className="container__col-1 caption">OR</p>
                    <hr className="container__col-5 divider-line"/>
                </div>
            </div>
        </div>
        {/* PHONE INPUT */}
        <div className="container__row"> 
            <div className="container__col-12">
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={phoneInvalid}
                    inputId={'phone'}
                    name={'phone'}
                    value={RegexService.formatInput(phone, 'phone')}
                    type={'tel'}
                    placeholder={'Phone Number'}
                    required={true}
                    handleClick={onInputChange}
                    label={'Phone Number'}
                />
            </div>
        </div>
        {/* SEND CODE BUTTON */}
        <div className="container__row m-v-1">
            <div className="container__col-12 link">
                <FormButton 
                    name="passwordReset" 
                    disable={false}
                    goalMet={false}
                    displayText={'Send Code'}
                    styling={'btn-std-lg-orange'}
                    handleClick={() => {}}
                />
            </div>
        </div>
        {/* LOGIN LINK */}
        <div className="container__row">
            <div className="container__col-12">
                <FormLink
                name={'login'}
                where={'/auth'}
                displayText={'Opps, back to login!'} 
                styling={'Formlink-md-blue'}
                />
            </div>
        </div>
        {/* SIGNUP LINK */}
        <div className="container__row">
            <div className="container__col-12">
                <FormLink
                name={'signup'}
                where={'/auth/signup'}
                displayText={'Dont have an account?'} 
                styling={'Formlink-md-blue'}
                />
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.ver.isEmailVerified,
    isPhoneVerified: state.ver.isPhoneVerified,
    userId: state.auth.user.id,
    phone: state.auth.user.phone,
    email: state.auth.user.email,
    isLoading: state.auth.isLoading,
  });

export default connect(mapStateToProps, {verifyPhone, verifyEmail, sendEmailCode, sendPhoneCode})(RecoveryForm);