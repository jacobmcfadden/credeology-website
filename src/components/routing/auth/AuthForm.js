import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthRoute from '../../../routing/AuthRoute';
import { connect } from 'react-redux';

import ResetPasswordForm from './ResetPasswordForm';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import VerifyForm from './VerifyForm';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

const AuthForm = (props) => {
    
  return (
    <div className="AuthForm form pd-2">
      <div className="container__col-12 mg-tb-2">
        <div className={`container__col-12 ${props.isLoading === true ? "rotate" : "" }`}>
          <Logo SVGClass="size-6" fill="fill-primary"/>  
          </div>
          <Credeology margin="mg-t-1" size="size-3" fill="fill-dark"/>
      </div>
      
      <Switch>
          <AuthRoute path="/auth/login" component={LoginForm} />
          <Route path="/auth/passwordReset" component={ResetPasswordForm} />
          <Route path="/auth/signup" component={SignupForm} />
          <AuthRoute path="/auth/verify" component={VerifyForm} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  authMessage: state.auth.authMessage,
  user: state.auth.user
});

export default connect(mapStateToProps)(AuthForm);