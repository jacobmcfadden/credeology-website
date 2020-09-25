import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/reducers/authReducer';
import {addWarning, addError, addSuccess, addSystem} from '../../redux/reducers/notificationReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';
import {sendPhoneCode, sendEmailCode} from '../../redux/reducers/authReducer';
import SixDigitButton from '../../components/inputs/SixDigitInput';

const LoginForm = (props) => {
    const [contact, setContact] = useState('');
    const [contactInvalid, setContactInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [twoFactorRequired, setTwoFactorRequired] = useState(false);
    const [contactCodeSent, setContactCodeSent] = useState(false);

    const onInputChange = (event) => {
        if(event.target.name === "contact") {
            if(RegexService.validateInput(event.target.value, 'phone')){
                // Format check passed
                setContact(RegexService.formatInput(event.target.value, 'phone'));
                setContactInvalid(false);
                setIsPhone(true);
                setIsEmail(false);
            } else if(RegexService.validateInput(event.target.value, 'email')){
                // Format check passed
                setContact(RegexService.formatInput(event.target.value, 'email'));
                setContactInvalid(false);
                setIsPhone(false);
                setIsEmail(true);
            } else {
                // the format check failed
                setContact(event.target.value);
                contact !== '' ? setContactInvalid(true) : setContactInvalid(false);
                setIsPhone(false);
                setIsEmail(false);
            }
        } else if(event.target.name === "password") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setPassword(event.target.value);
                setPasswordInvalid(false);
            } else {
                // the format check failed
                setPassword(event.target.value);
                setPasswordInvalid(true);
            } 
        }
    };

    const login = (event, code) => {
        if(password && contact){
            if(!contactInvalid && !passwordInvalid) {
                props.loginUser(contact, password, code)
                .then(res => {
                    if(res) {
                        if(res.action.type.includes('_FULFILLED')) {
                            props.addSuccess('Login successful!')
                        }
                    }
                }).catch(err => {
                    if (err.response.status === 409) {
                        props.addWarning('Please complete two factor auth to finish login.')
                        setTwoFactorRequired(true)
                    } else if(err.response.status === 404) {
                        props.addWarning('Your input did not match our records.')

                    } else if(err.response.status === 403) {
                        props.addError('You have entered invalid credentials.')

                    } else if(err.response.status === 401) {
                        props.addError('You have entered invalid credentials.')

                    }
                })
            } else { 
                props.addWarning('Please correct input errors listed below each input field.')
            }
        } else {
            props.addWarning('Both Email/Phone and Password inputs must be filled out.')
        }
    };
  
    const sendCode = (event) => {
        if(isEmail === true) {
            props.sendEmailCode(contact).then(() => {
                setContactCodeSent(true);
                props.addSystem({message: 'Email verification code has been sent!'})
            }).catch ((err) => {
                props.addError('Email verification code was not sent!')
            })
        } else if (isPhone === true) {
            props.sendPhoneCode(contact).then(() => {
                setContactCodeSent(true);
                props.addSuccess('Phone verification code has been sent!')
            }).catch ((err) => {
                props.addError('Phone verification code was not sent!')
            })
        }
    };

    const inputLabelResult = () => {
        if(isEmail && !isPhone) {
            return 'Email Address';
        } else if(!isEmail && isPhone) {
            return 'Phone Address';
        } else {
            return 'Email/Phone';
        }
    }

    return (
        <div className="LoginForm container__row m-t-2 m-h-1">
            {/* TITLE */}
            <div className="container__row justify-center m-b-1">
                <p className="Subtitle-primary">Account Login</p>
            </div>
            <div className={twoFactorRequired === true ? "disabled hidden" : 'container__row justify-center'}>   
                {/* CONTACT INPUT */}
                <div className="container__col-12">  
                        <FormInput
                            styling={'input'}
                            hide={false}
                            inputInvalid={contactInvalid}
                            inputId={'contact'}
                            name={'contact'}
                            value={contact}
                            type={'contact'}
                            placeholder={'Email or Phone'}
                            required={true}
                            handleClick={onInputChange}
                            label={inputLabelResult()}
                            validationMessage={"Input must be a valid email address or 10 digit phone number."}
                        />
                </div>
                {/* PASSWORD INPUT */}
                <div className="container__col-12">   
                        <FormInput
                            styling={'input'}
                            hide={false}
                            inputInvalid={passwordInvalid}
                            inputId={'password'}
                            name={'password'}
                            value={password}
                            type={'password'}
                            placeholder={'Password'}
                            required={true}
                            handleClick={onInputChange}
                            label={'Password'}
                            validationMessage={'Passwords are required to be greater than 9 characters.'}
                        />
                </div>
                {/* LOGIN BUTTON */}
                <div className="container__row m-v-1">
                    <div className="container__col-12">
                        <FormButton
                            name="login" 
                            goalMet={props.isAuthenticated}
                            isLoading={props.isLoading}
                            displayText={'Login'}
                            styling={'btn-std-lg-orange'}
                            handleClick={login}
                        />
                    </div>
                </div>
                {/* RECOVERY LINK */}
                <div className="container__row">
                    <div className="container__col-12">
                        <FormLink
                        name={'recovery'}
                        where={'/auth/recovery'}
                        displayText={'Forget your password?'} 
                        styling={'Formlink-md-blue'}
                        />
                    </div>
                </div>
                {/* SIGN LINK */}
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
            <div className={twoFactorRequired === false ? "disabled hidden" : 'container__row justify-center'}>
                <div className="container__row justify-center">
                    <p className={`Subtitle m-t-1`}>Two-Factor Authentication</p>
                </div>   
                <div className="container__row justify-center m-t-1">
                            <p className={`Phrase`}>Credeology will send a verification code to:</p>
                </div>
                <div className="container__row">
                    <div className="container__col-12">
                        <p className={`Phrase-primary align-text m-t-50 m-b-1`}>{contact}</p>
                    </div>
                </div>
                <div className="container__row">
                    <div className="container__col-12">
                        <SixDigitButton 
                            show={contactCodeSent}
                            goalMet={props.isAuthenticated}
                            handleCode={login}
                        />
                    </div>
                </div>
                <div className="container__row m-v-50">
                    <div className={contactCodeSent ? "hidden" : "container__col-12"}>
                        <FormButton 
                            name="phone"
                            disable={contactCodeSent}
                            goalMet={props.isAuthenticated}
                            displayText={'AUTHENTICATE'}
                            styling={'btn-std-lg-orange'}
                            handleClick={sendCode}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {loginUser, addError, addSuccess, addWarning, addSystem, sendPhoneCode, sendEmailCode})(LoginForm);