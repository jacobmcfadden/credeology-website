import React, {useState} from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../../redux/reducers/authReducer';
import * as RegexService from '../../services/RegexService';
import {addSuccess, addWarning, addError} from '../../redux/reducers/notificationReducer';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';
import FormLink from '../../components/links/FormLink';

const SignupForm = (props) => {
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmInvalid, setPasswordConfirmInvalid] = useState(false);
    
    const [firstName, setFirstName] = useState('');
    const [firstNameInvalid, setFirstNameInvalid] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameInvalid, setLastNameInvalid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);

    const onFirstNameChange = (event) => {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            // Format check passed
            setFirstName(RegexService.formatInput(event.target.value, event.target.name));
            setFirstNameInvalid(false);
        } else {
            // the format check failed
            setFirstName(RegexService.formatInput(event.target.value, event.target.name));
            firstName !== '' ? setFirstNameInvalid(true) : setFirstNameInvalid(false); 
        }

    }

    const onLastNameChange = (event) => {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            // Format check passed
            setLastName(RegexService.formatInput(event.target.value, event.target.name));
            setLastNameInvalid(false);
        } else {
            // the format check failed
            setLastName(RegexService.formatInput(event.target.value, event.target.name));
            lastName !== '' ? setLastNameInvalid(true) : setLastNameInvalid(false)
        }

    }

    const onPhoneChange = (event) => {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            // Format check passed
            setPhone(RegexService.formatInput(event.target.value, event.target.name));
            setPhoneInvalid(false);
        } else {
            // the format check failed
            setPhone(RegexService.formatInput(event.target.value, event.target.name));
            phone !== '' ? setPhoneInvalid(true) : setPhoneInvalid(false);
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

    const register = () => {
        if(password === passwordConfirm && (password !== '' || passwordConfirm !== '')) {
            if(firstName && lastName && phone && email && password) {
                if(!firstNameInvalid && !lastNameInvalid && !phoneInvalid && !emailInvalid && !passwordInvalid) {
                   props.registerUser(firstName, lastName, phone, email, password).then((res) => {
                       props.addSuccess("Registration was successsful!");
                   }).catch((error) => {props.addError("Credentials provided are assigned to existing account.")})
                } else {props.addWarning('Input errors listed below each input feild must be resolved.')}
            } else {props.addWarning('No input fields can be left blank.')}
        } else {
        setPasswordInvalid(true);
        setPasswordConfirmInvalid(true);
        props.addWarning('Password and Confirm Password must be filled out correctly.');
        }
    }

    return (
        <div className="SignupForm container__row m-t-2 m-h-1">
            {/* TITLE */}
            <div className="container__row justify-center">
                <p className="Subtitle-primary">Account Creation</p>
            </div>
            {/* FIRST NAME INPUT */}
            <div className="container__col-12 m-t-1"> 
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={firstNameInvalid}
                    inputId={'firstName'}
                    name={'firstName'}
                    value={firstName}
                    type={'text'}
                    placeholder={'First Name'}
                    required={true}
                    handleClick={onFirstNameChange}
                    label={'First Name'}
                    validationMessage={'Firstname must have no spaces.'}
                />
            </div>
            {/* LAST NAME INPUT */}
            <div className="container__col-12">
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={lastNameInvalid}
                    inputId={'lastName'}
                    name={'lastName'}
                    value={lastName}
                    type={'text'}
                    placeholder={'Last Name'}
                    required={true}
                    handleClick={onLastNameChange}
                    label={'Last Name'}
                    validationMessage={'Last name must have no spaces.'}
                />
            </div>
            {/* PHONE INPUT */}
            <div className="container__col-12">
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={phoneInvalid}
                    inputId={'phone'}
                    name='phone'
                    value={phone}
                    type='tel'
                    placeholder={'Phone Number'}
                    required={true}
                    handleClick={onPhoneChange}
                    label={'Phone Number'}
                    validationMessage={'Phone number should only be 10 digits long.'}
                />
            </div>
            {/* EMAIL INPUT */}
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
                    handleClick={onEmailChange}
                    label={'Email Address'}
                    validationMessage={'Email incorrect, please revise.'}
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
                    handleClick={onPasswordChange}
                    label={'Password'}
                    validationMessage={'Password must contain the following:(1) lowercase letter, (1) uppercase letter, (1) number, and (9+) characters in length.'}
                />
            </div>
            {/* CONFIRM PASSWORD INPUT */}
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
            {/* REGISTER BUTTON */}
            <div className="container__row m-v-1">
                <div className="container__col-12">
                    <FormButton 
                        name="register" 
                        goalMet={props.isAuthenticated}
                        isLoading={props.isLoading}
                        displayText={'Signup'}
                        styling={'btn-std-lg-orange'}
                        handleClick={register}
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading
  });

export default connect(mapStateToProps, {registerUser, addWarning, addSuccess, addError})(SignupForm);