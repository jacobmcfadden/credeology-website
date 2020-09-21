import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import UserAccountSettings from './UserAccountSettings';
import UserAccountActivity from './UserAccountActivity';
import {connect} from 'react-redux';
import {logoutUser} from '../../../../../../redux/reducers/authReducer';
import FormButton from '../../../../../../components/buttons/FormButton';
import ImageIcon from '../../../../../../assets/icons/system/ImageIcon';
import FormLink from '../../../../../../components/links/FormLink';

const UserAccount = (props) => {
  const {firstName, lastName, email, phone, } = props;
  
  const setUserLoggedOut = async () => {
    props.logoutUser().then((res) => {
     return <Redirect push to={'/auth'} />;
    });
  }
console.log()
  return (
    <div className="UserAccount">
      <div className="container__row">
        <div className="ProfileContainer">
          <div className="AccountProfile">
          <div className="UserProfile">
            <div className="ProfilePicture">
              <div className="UserPicture">
                <ImageIcon width="5rem" height="5rem" className="ImageIcon"/>
              </div>
            </div>
            <div className="UserInfo">
              <span className="UserName">
                <p className="FirstName">{firstName}</p><p className="LastName">{lastName}</p>
              </span>
              <span className="UserEmail">
                <p className="EmailAddress">{email}</p>
              </span>
              <span className="UserPhone">
                <p className="PhoneNumber">{phone}</p>
              </span>
            </div>
          </div>
          <div className="UserSettings">
            <div className="SettingsLink">
              <FormLink
                name={'userSettings'}
                where={'/app/account/settings'}
                displayText={'SETTINGS'} 
                styling={'Formlink-lg-blue'}
              />
            </div>
          </div>
          <div className="UserActivity">
            <div className="ActivityLink">
              <FormLink
                name={'userActivity'}
                where={'/app/account/activity'}
                displayText={'ACTIVITY'} 
                styling={'Formlink-lg-blue'}
              />
            </div>
          </div>
          <div className="UserLogout">
            <div className="LogoutButton">
              <FormButton 
                name="logout"
                goalMet={!props.isAuthenticated}
                hide={false}
                displayText={'Logout'} 
                styling={'btn-std-lg-orange'}
                handleClick={setUserLoggedOut}
              />
            </div>
          </div>
        </div>
        </div>
        <div className="AccountDisplay">
          <Switch>
            <Route path="/app/account/activity" component={UserAccountActivity}/>
            <Route component={UserAccountSettings}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.isEmailVerified,
  isPhoneVerified: state.auth.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip,
  userId: state.auth.user.id,
  firstName: state.auth.user.firstName,
  lastName: state.auth.user.lastName,
  phone: state.auth.user.phone,
  email: state.auth.user.email,
  message: state.auth.authMessage,
  isLoading: state.auth.isLoading,
  result: state.auth.result
});

export default connect(mapStateToProps, {logoutUser})(UserAccount);