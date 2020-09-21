import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/reducers/authReducer';
import {addWarning, addError, addSuccess} from '../../redux/reducers/notificationReducer';
import * as RegexService from '../../services/RegexService';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';

const LoginForm = (props) => {
    const [contact, setContact] = useState('');
    const [contactInvalid, setContactInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhone, setIsPhone] = useState(false);

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

    const login = (event) => {
        if(password && contact){
            if(event === 'login' && !contactInvalid && !passwordInvalid) {
                props.loginUser(contact, password)
                .then(res => {
                    if(res) {
                        if(res.action.type.includes('_FULFILLED')) {
                            props.addSuccess('Login successful!')
                        }
                    }
                })
            } else { 
                props.addWarning('Please correct input errors listed below each input field.')
            }
        } else {
            props.addWarning('Both Email/Phone and Password inputs must be filled out.')
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
                        goalMet={props.isLoggedIn}
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
    isLoggedIn: state.auth.isLoggedIn
  });

export default connect(mapStateToProps, {loginUser, addError, addSuccess, addWarning})(LoginForm);