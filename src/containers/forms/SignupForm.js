import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../redux/reducers/authReducer';
import * as RegexService from '../../services/RegexService';
import {addWarning} from '../../redux/reducers/notificationReducer';

import FormButton from '../../components/buttons/FormButton';
import FormInput from '../../components/inputs/FormInput';

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

    const onInputChange = (event) => {
        if(event.target.name === "firstName") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setFirstName(event.target.value);
                setFirstNameInvalid(false);
            } else {
                // the format check failed
                setFirstName(event.target.value);
                setFirstNameInvalid(true);
            }
        } else if(event.target.name === "lastName") {
            if(RegexService.validateInput(event.target.value, event.target.name)){
                // Format check passed
                setLastName(event.target.value);
                setLastNameInvalid(false);
            } else {
                // the format check failed
                setLastName(event.target.value);
                setLastNameInvalid(true);
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
        } else if(event.target.name === "passwordConfirm") {
            
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
        
    }

    const register = async () => {
        if(password === passwordConfirm && (password !== '' || passwordConfirm !== '')) {
            if(firstName && lastName && phone && email && password) {
                if(!firstNameInvalid && !lastNameInvalid && !phoneInvalid && !emailInvalid && !passwordInvalid) {
                    await props.registerUser(firstName, lastName, phone, email, password);
                } else {await props.addWarning('Please fix input errors listed below.')}
            } else {await props.addWarning('All form input must be filled out correctly.')}
        } else {
        setPasswordInvalid(true);
        setPasswordConfirmInvalid(true);
        await props.addWarning({message: 'Password and Confirm Password must be filled out correctly.', type: 'ErrorMsg'});
        }
    };

    return (
        <div className="SignupForm container m-t-2">
            {/* TITLE */}
            <div className="container__row">
                <p className="container__col-12 title">ACCOUNT CREATION</p>
            </div>
            {/* FIRST NAME INPUT */}
            <div className="container__row-center m-t-1"> 
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={firstNameInvalid}
                    inputId={'firstName'}
                    name={'firstName'}
                    value={RegexService.formatInput(firstName, 'firstName')}
                    type={'text'}
                    placeholder={'First Name'}
                    required={true}
                    handleClick={onInputChange}
                    label={'First Name'}
                    validationMessage={'Firstname must have no spaces.'}
                />
            </div>
            {/* LAST NAME INPUT */}
            <div className="container__row">
                <FormInput
                    styling={'input'}
                    hide={false}
                    inputInvalid={lastNameInvalid}
                    inputId={'lastName'}
                    name={'lastName'}
                    value={RegexService.formatInput(lastName, 'lastName')}
                    type={'text'}
                    placeholder={'Last Name'}
                    required={true}
                    handleClick={onInputChange}
                    label={'Last Name'}
                    validationMessage={'Last name must have no spaces.'}
                />
            </div>
            {/* PHONE INPUT */}
            <div className="container__row">
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
                    validationMessage={'Phone number should only be 10 digits long.'}
                />
            </div>
            {/* EMAIL INPUT */}
            <div className="container__row">
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
            {/* PASSWORD INPUT */}
            <div className="container__row">
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
                    validationMessage={'Password must contain the following:(1) lowercase letter, (1) uppercase letter, (1) number, and (9+) characters in length.'}
                />
            </div>
            {/* CONFIRM PASSWORD INPUT */}
            <div className="container__row m-t-1">
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
                    handleClick={onInputChange}
                    label={'Confirm Password'}
                    validationMessage={'Password and Confirm Password must match.'}
                />
            </div>
            {/* REGISTER BUTTON */}
            <div className="container__row m-v-1">
                <div className="container__col-12 link">
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
            {/* LOGIN PAGE LINK */}
            <div className="container__row">
                <Link to="/auth" className="link container__col-12">
                    <FormButton 
                        name="login" 
                        disable={true}
                        goalMet={false}
                        displayText={'Opps, back to login!'}
                        styling={'btn-lnk-md-blue'}
                        handleClick={() => {}}
                    />
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {registerUser, addWarning})(SignupForm);