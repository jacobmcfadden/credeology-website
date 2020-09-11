import React from 'react';

import {connect} from 'react-redux';
import {logoutUser} from '../../../../../redux/reducers/authReducer';


import FormButton from '../../../../../components/buttons/FormButton';
const UserAccount = (props) => {

  const setUserLoggedOut = async () => {
    props.logoutUser();
  }
  return (
    <div className="UserAccount">
      <FormButton 
        name="logout"
        goalMet={!props.isAuthenticated}
        hide={false}
        displayText={'Logout'} 
        styling={'btn-std-lg-orange'}
        handleClick={setUserLoggedOut}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEmailVerified: state.auth.user.isEmailVerified,
  isPhoneVerified: state.auth.user.isPhoneVerified,
  isPhoneVerifySkip: state.auth.isPhoneVerifySkip,
  userId: state.auth.user.id,
  phone: state.auth.user.phone,
  email: state.auth.user.email,
  message: state.auth.authMessage,
  isLoading: state.auth.isLoading,
  result: state.auth.result
});

export default connect(mapStateToProps, {logoutUser})(UserAccount);