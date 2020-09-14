import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/reducers/authReducer';
import {addWarning, addError, addSuccess} from '../../redux/reducers/notificationReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    const onInputChange = (event) => {
        if(event.target.name === "phone") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setPhone(event.target.value);
                setPhoneInvalid(false);
            } else {
                // the format check failed
                setPhone(event.target.value);
                setPhoneInvalid(true);
            }
        } else if(event.target.name === "email") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setEmail(event.target.value);
                setEmailInvalid(false);
            } else {
                // the format check failed
                setEmail(event.target.value);
                setEmailInvalid(true);
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

    const login = (event) => {
        if(password && (email || phone)){
            if(event === 'login' && !emailInvalid && !passwordInvalid && !phoneInvalid) {
                props.loginUser(email, phone, password).then((res) => {
                    props.addSuccess('Login was successful!')
                }).catch((err) => {
                    props.addError('You have entered invalid login credentials.')
                })   
            } else { 
                props.addWarning('Please correct input errors listed below each input field.')
            }
        } else {
            props.addWarning('Email or phone, and password cannot be left blank.')
        }

    };

    return (
        <div className="LoginForm container m-t-2">
            {/* TITLE */}
            <div className="container__row">
                <p className="container__col-12 title">ACCOUNT LOGIN</p>
            </div>
            {/* PHONE INPUT */}
            <div className="container__row m-t-1">
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
                        validationMessage={'Phone numbers are required to be in a 10 digit format.'}

                    />
                </div>
            </div>
            {/* OR DIVIDER LINE */}
            <div className="container__row">
                <div className="container__col-12">
                    <div className="container__row">
                        <hr className="container__col-5 divider-line"/>
                        <p className="container__col-1 caption m-v-auto text-center">OR</p>
                        <hr className="container__col-5 divider-line"/>
                    </div>
                </div>
            </div>
            {/* EMAIL INPUT */}
            <div className="container__row">  
                <div className="container__col-12">    
                    <FormInput
                        styling={'input'}
                        hide={false}
                        inputInvalid={emailInvalid}
                        inputId={'email'}
                        name={'email'}
                        value={email}
                        type={'email'}
                        placeholder={'Email Address'}
                        required={true}
                        handleClick={onInputChange}
                        label={'Email Address'}
                        validationMessage={"Email Address's are required to contain a '@' and '.'"}
                    />
                </div> 
            </div>
            {/* PASSWORD INPUT */}
            <div className="container__row m-t-1">   
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
            </div>
            {/* LOGIN BUTTON */}
            <div className="container__row m-v-1">
                <div className="container__col-12 link">
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
                    displayText={'Forget you password?'} 
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
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {loginUser, addError, addSuccess, addWarning})(LoginForm);