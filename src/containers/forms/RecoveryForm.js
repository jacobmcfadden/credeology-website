import React, {useState} from 'react';
import {connect} from 'react-redux';
import {recoverAccount, resetPassword} from '../../redux/reducers/authReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';
import SixDigitButton from '../../components/inputs/SixDigitInput';
import { addWarning, addSuccess, addError, addSystem } from '../../redux/reducers/notificationReducer';

const RecoveryForm = (props) => {
    const [contact, setContact] = useState('');
    const [contactInvalid, setContactInvalid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [firstContactFound, setFirstContactFound] = useState(false);
    let [firstContactCode, setFirstContactCode] = useState('')
    const [twoFactorRequired, setTwoFactorRequired] = useState(false);
    const [secondContact, setSecondContact] = useState('')
    let [secondContactCode, setSecondContactCode] = useState('');
   
    const [userPassed, setUserPassed] = useState(false);
    
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmInvalid, setPasswordConfirmInvalid] = useState(false);

    const onPasswordChange = (event) => {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            // Format check passed
            setPassword(event.target.value);
            setPasswordInvalid(false);
            if(event.target.value === passwordConfirm) {
                setPasswordConfirmInvalid(false);
            } else {
                setPasswordConfirmInvalid(true);
            }
        } else {
            // the format check failed
            setPassword(event.target.value);
            setPasswordInvalid(true);
        }
    }

    const onPasswordConfirmChange = (event) => {
        if(event.target.value === password){
            // Format check passed
            setPasswordConfirm(event.target.value);
            setPasswordConfirmInvalid(false);
        } else {
            // the format check failed
            setPasswordConfirm(event.target.value);
            setPasswordConfirmInvalid(true);
        }
    }

    const onContactChange = (event) => {
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
        } else {
            // Do nothing
        }
    };

    const onRecoverSubmit = (event, code) => {
        if(firstContactFound === true && twoFactorRequired === false) {
            setFirstContactCode(code);
            onRecoverAccount(code, secondContactCode);
        } else if (firstContactFound === true &&  twoFactorRequired === true) {
            setSecondContactCode(code);
            onRecoverAccount(firstContactCode, code);
        } else {
            onRecoverAccount();
        }
    }

    const onRecoverAccount = (firstCode, secondCode) => {
       if(!contact) {
           props.addWarning('Your email or phone linked to the account must be provided.');
        } else {
           if(contactInvalid) {
               props.addWarning('Please fix the current warning at the email address input and resubmit.');
            } else {
                props.recoverAccount(contact, firstCode, secondCode).then((res) => {
                    // this should be 200 status if it isnt in catch with userPassed === true
                    return setUserPassed(true);
                }).catch((err) => {
                    if (err.response.status === 500) {
                        return props.addWarning('Returned a server 500 error')
                    } else if(err.response.status === 404) {
                        return props.addWarning('Your input did not match.')
                    } else if(err.response.status === 401) {
                        setFirstContactFound(true);
                        return props.addSystem({message: "Account found code has been sent"})
                    } else if(err.response.status === 403) {
                        setTwoFactorRequired(true)
                        setSecondContact(err.response.data)
                        return props.addSystem({message: "Account requires Two Factor Authentication"})
                    } else {
                        return props.addSystem({message: "Return no exprected esponses."})
                    }
                })
            }
        }
    }

    const onResetSubmit = () => {
        if(password === passwordConfirm && (password !== '' || passwordConfirm !== '')) {
            if(password && !passwordInvalid && userPassed === true) {
                   props.resetPassword(password, contact).then((res) => {
                       props.addSuccess("Password reset was successsful!");
                   }).catch((error) => {props.addError("Password failed, please try again.")})
            } else {
                props.addWarning('Please fix input errors list below input fields.')
            }
        } else {
        setPasswordInvalid(true);
        setPasswordConfirmInvalid(true);
        props.addWarning('Password and Confirm Password must be filled out correctly.');
        }
    }

    const recoverAccountElements = () => {
        if(firstContactFound === true && twoFactorRequired === true && userPassed === false) {
            return (
                <div className="RecoverAccount container__row">
                {/* INSTRUCTIONAL P TAG */}
                <div className="container__row m-t-1">
                    <div className="container__col-12">
                        <p className="Phrase align-text">A code has been sent to {secondContact}</p>
                    </div>
                </div>
                <div className="container__row justify-center">
                        <SixDigitButton 
                            show={twoFactorRequired}
                            goalMet={userPassed}
                            handleCode={onRecoverSubmit}
                        />
                </div>
            </div>    

            );
        } else if (firstContactFound === true && twoFactorRequired === false && userPassed === false) {
            return (
                <div className="RecoverAccount container__row">
                {/* INSTRUCTIONAL P TAG */}
                <div className="container__row m-t-1">
                    <div className="container__col-12">
                        <p className="Phrase align-text">A code has been sent to {contact}</p>
                    </div>
                </div>
                <div className="container__row justify-center">
                        <SixDigitButton 
                            show={firstContactFound}
                            goalMet={userPassed}
                            handleCode={onRecoverSubmit}
                        />
                </div>
            </div>    

            );
        }else if(firstContactFound === false && twoFactorRequired === false && userPassed === false){
            return (
                <div className="RecoverAccount container__row">
                    {/* INSTRUCTIONAL P TAG */}
                    <div className="container__row m-t-1">
                        <div className="container__col-12">
                            <p className="Phrase align-text">Please enter your email or phone linked to your account.</p>
                        </div>
                    </div>
                    {/* EMAIL INPUT */}
                    <div className="container__row justify-center m-t-1">
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
                            handleClick={onContactChange}
                            label={inputLabelResult()}
                            validationMessage={"Input must be a valid email address or 10 digit phone number."}
                        />
                        </div> 
                    </div>
                    {/* SEND CODE BUTTON */}
                    <div className="container__row m-v-1">
                        <div className="container__col-12 link">
                            <FormButton 
                                name="recoverAccount" 
                                disable={firstContactFound}
                                goalMet={firstContactFound}
                                displayText={'Recover Account'}
                                styling={'btn-std-lg-orange'}
                                handleClick={onRecoverSubmit}
                            />
                        </div>
                    </div>
                </div>    
            );
        }
    }
   
    const resetPasswordElements = () => {
        if(userPassed === true && firstContactFound === true) {
            return( 
            <div className="container__row">
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
                        handleClick={onPasswordChange}
                        label={'Password'}
                        validationMessage={'Password must contain the following:(1) lowercase letter, (1) uppercase letter, (1) number, and (9+) characters in length.'}
                    />
                </div>
                <div className="container__col-12">
                    <FormInput
                        styling={'input'}
                        hide={false}
                        inputInvalid={passwordConfirmInvalid}
                        inputId={'passwordConfirm'}
                        name={'passwordConfirm'}
                        value={passwordConfirm}
                        type={'password'}
                        placeholder={'Confirm Password'}
                        required={true}
                        handleClick={onPasswordConfirmChange}
                        label={'Confirm Password'}
                        validationMessage={'Password and Confirm Password must match.'}
                    />
                </div>
                <div className="container__row m-v-1">
                    <div className="container__col-12">
                        <FormButton 
                            name="reset" 
                            goalMet={props.isAuthenticated}
                            isLoading={props.isLoading}
                            displayText={'Reset Password'}
                            styling={'btn-std-lg-orange'}
                            handleClick={onResetSubmit}
                        />
                    </div>
                </div>
            </div>
            );
        } else {

        }
    }

    const pageLinks = () => {
        if(!firstContactFound) {
            return ( 
                <div className="RecoverRouteLinks container__row">
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

    }
    
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
    <div className="RecoveryForm container__row m-t-2 m-h-1">
        {/* TITLE */}
        <div className="container__row justify-center m-b-1">
            <p className="Subtitle-primary">Account Recovery</p>
        </div>
        {recoverAccountElements()}
        {resetPasswordElements()}
        {pageLinks()}
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {recoverAccount, resetPassword, addError, addSuccess, addWarning, addSystem})(RecoveryForm);