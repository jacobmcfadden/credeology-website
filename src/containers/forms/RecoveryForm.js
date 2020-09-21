import React, {useState} from 'react';
import {connect} from 'react-redux';
import {recoverAccount, resetPassword} from '../../redux/reducers/authReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';
import VerifyEmailForm from '../forms/VerifyEmailForm';
import { addWarning, addSuccess, addError } from '../../redux/reducers/notificationReducer';

const RecoveryForm = (props) => {
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmInvalid, setPasswordConfirmInvalid] = useState(false);

    const [recoverInitiated, setRecoverInitiated] = useState(false);
    
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

    const onEmailChange = (event) => {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            // Format check passed
            setEmail(RegexService.formatInput(event.target.value, event.target.name));
            setEmailInvalid(false);
        } else {
            // the format check failed
            setEmail(RegexService.formatInput(event.target.value, event.target.name));
            email !== '' ? setEmailInvalid(true) : setEmailInvalid(false);
        }
    }

    const onRecoverSubmit = () => {
       if(!email) {
           props.addWarning('Your email address must be provided.');
        } else {
           if(emailInvalid) {
               props.addWarning('Please fix the current warning at the email address input and resubmit.');
            } else {
                props.recoverAccount(email).then(() => {
                    setRecoverInitiated(true);
                    props.addSuccess('Your email address has been located!')
                }).catch(() => {
                    props.addError('Your email address was not found in our system.')
                })
            }
        }
    }

    const onResetSubmit = () => {
        if(password === passwordConfirm && (password !== '' || passwordConfirm !== '')) {
            if(password && !passwordInvalid) {
                   props.resetPassword(password, props.email).then((res) => {
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
        if(recoverInitiated) {
            return (
                <div className="container__row justify-center">
                    <VerifyEmailForm/>
                </div>
            );
        } else {
            return (
                <div className="RecoverAccount container__row">
                    {/* INSTRUCTIONAL P TAG */}
                    <div className="container__row m-t-1">
                        <div className="container__col-12">
                            <p className="Phrase align-text">Please enter your email address linked to your account.</p>
                        </div>
                    </div>
                    {/* EMAIL INPUT */}
                    <div className="container__row justify-center m-t-1">
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
                                handleClick={onEmailChange}
                                label={'Email Address'}
                                validationMessage={'Email incorrect, please revise.'}
                            />
                        </div> 
                    </div>
                    {/* SEND CODE BUTTON */}
                    <div className="container__row m-v-1">
                        <div className="container__col-12 link">
                            <FormButton 
                                name="recoverAccount" 
                                disable={false}
                                goalMet={false}
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
        if(recoverInitiated && props.email && props.isEmailVerified) {
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
                            goalMet={props.isLoggedIn}
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
        if(!recoverInitiated) {
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
    isLoggedIn: state.auth.isLoggedIn,
    isEmailVerified: state.auth.isEmailVerified,
    email: state.auth.user.email,
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {recoverAccount, resetPassword, addError, addSuccess, addWarning})(RecoveryForm);