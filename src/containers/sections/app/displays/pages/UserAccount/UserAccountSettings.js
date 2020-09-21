import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateTwoFactorAuth} from '../../../../../../redux/reducers/authReducer';
// import {updateUser} from '../../redux/reducers/authReducer';
import {addWarning, addError, addSuccess} from '../../../../../../redux/reducers/notificationReducer';
import * as RegexService from '../../../../../../services/RegexService';

import FormInput from '../../../../../../components/inputs/FormInput';
import FormButton from '../../../../../../components/buttons/FormButton';
import FormToggle from '../../../../../../components/toggles/FormToggle';

const UserAccountSettings = (props) => {
  const {isLoading, firstName, lastName, phone, email, twoFactorAuth} = props;
  
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);
  const [lastNameInvalid, setLastNameInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const onInputChange = (event) => {
    if(event.target.name === "firstName") {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            setFirstNameInvalid(false);
        } else {
            setFirstNameInvalid(true);
        }
    } else if(event.target.name === "lastName") {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            setLastNameInvalid(false);
        } else {
            setLastNameInvalid(true);
        }
    } else if(event.target.name === "phone") {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            setPhoneInvalid(false);
        } else {
            setPhoneInvalid(true);
        }
    } else if(event.target.name === "email") {
        if(RegexService.validateInput(event.target.value, event.target.name)){
            setEmailInvalid(false);
        } else {
            setEmailInvalid(true);
        }
    }    
  }

  const toggleTwoFactorAuth = () => {
    props.updateTwoFactorAuth(!twoFactorAuth).then(() => {
      props.addSuccess('User two factor auth settings have been updated!')
    }).catch(() => {
      props.addError('User two factor auth settings could not be updated.')
    })
  }

  return (
    <div className="UserAccountSettings">
      <div className="EditInfo">
        <div className="EditInfoTitle">
          <h2 className="Title">Edit Info</h2>
        </div>
        <div className="EditInfoPhrase">
          <p className="Phrase">Your current info linked to your account. This is how organizations identify you. Changing email or phone will require verification.</p>
        </div>
        <div className="EditFirstName">
          <div className="container__col-10 container__col-sm-8 container__col-md-6 container__col-lg-6 container__col-xl-5">
            <FormInput
              styling={'input'}
              hide={false}
              inputInvalid={firstNameInvalid}
              inputId={'firstName'}
              name={'firstName'}
              value={RegexService.formatInput(firstName, 'firstName')}
              type={'input'}
              placeholder={firstName}
              required={true}
              handleClick={onInputChange}
              label={'First Name'}
            />
          </div>
        </div>
        <div className="EditLastName">
        <div className="container__col-10 container__col-sm-8 container__col-md-6 container__col-lg-6 container__col-xl-5">
            <FormInput
              styling={'input'}
              hide={false}
              inputInvalid={lastNameInvalid}
              inputId={'lastName'}
              name={'lastName'}
              value={RegexService.formatInput(lastName, 'lastName')}
              type={'text'}
              placeholder={lastName}
              required={true}
              handleClick={onInputChange}
              label={'Last Name'}
            />
          </div>
        </div>
        <div className="EditEmail">
        <div className="container__col-10 container__col-sm-8 container__col-md-6 container__col-lg-6 container__col-xl-5">
            <FormInput
                styling={'input'}
                hide={false}
                inputInvalid={emailInvalid}
                inputId={'editEmail'}
                name={'editEmail'}
                value={RegexService.formatInput(email, 'email')}
                type={'email'}
                placeholder={email}
                required={true}
                handleClick={onInputChange}
                label={'Email Address'}
                validationMessage={"Email Address's are required to contain a '@' and '.'"}
              />
          </div>
        </div>
        <div className="EditPhone">
        <div className="container__col-10 container__col-sm-8 container__col-md-6 container__col-lg-6 container__col-xl-5">
            <FormInput
              styling={'input'}
              hide={false}
              inputInvalid={phoneInvalid}
              inputId={'phone'}
              name={'phone'}
              value={RegexService.formatInput(phone, 'phone')}
              type={'tel'}
              placeholder={phone}
              required={true}
              handleClick={onInputChange}
              label={'Phone Number'}
              validationMessage={'Phone numbers are required to be in a 10 digit format.'}
            />
          </div>
        </div>
      </div>
      <div className="PasswordReset">
        <div className="PasswordResetTitle">
          <h2 className="Title">Reset Password</h2>
        </div>
        <div className="PasswordResetPhrase">
          <p className="Phrase">Password resets will require email or phone verification.</p>
        </div>
        <div className="ResetButton">
        <div className="container__col-10 container__col-sm-8 container__col-md-6 container__col-lg-6 container__col-xl-5">
            <FormButton
              name="resetPassword" 
              isLoading={isLoading}
              displayText={'Reset Password'}
              styling={'btn-std-lg-blue'}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="TwoFactorAuth">
        <div className="TwoFactorTitle">
          <h2 className="Title">Two-Factor Authentication</h2>
        </div>
        <div className="TwoFactorPhrase">
          <p className="Phrase">Enabling two factor authentication greatly increases your account security.</p>
        </div>
        <div className="TwoFactorToggle">
          <FormToggle name="twoFactorAuth" isActive={twoFactorAuth} handleClick={toggleTwoFactorAuth}/>
        </div>
      </div>
      <div className="Notifications">
        <div className="NotificationTitle">
          <h2 className="Title">Notifications</h2>
        </div>
        <div className="NotificationPhrase">
          <p className="Phrase">We will notify you about the important things, just let us know how you want to hear about it.</p>
        </div>
        <div className="NotificationEmail">
          <p className="m-t-1 m-r-1">By Email</p>
        <div className="NotifyEmailToggle">
          <FormToggle name="notifyEmail" isActive={false} handleClick={() => {}}/>
        </div>
        </div>
        <div className="NotificationPhone m-t-1">
          <p className="m-t-1 m-r-1">By Phone</p>
        <div className="NotifyPhoneToggle">
          <FormToggle name="notifyPhone" isActive={false} handleClick={() => {}}/>
        </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  firstName: state.auth.user.firstName,
  lastName: state.auth.user.lastName,
  email: state.auth.user.email,
  phone: state.auth.user.phone,
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  twoFactorAuth: state.auth.twoFactorAuth
});

export default connect(mapStateToProps, {addError, addSuccess, addWarning, updateTwoFactorAuth})(UserAccountSettings);