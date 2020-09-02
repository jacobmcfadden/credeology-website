import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import ResetPasswordForm from './ResetPasswordForm';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

const AuthForm = (props) => {
    
    const [message, setMessage] = useState('');
    
  return (
    <div className="AuthForm form pd-2">
            <div className="message-display">
                <p>{message}</p>
            </div>
            <div className="container__col-12 mg-tb-2">
                <Logo SVGClass="size-6" fill="fill-primary"/>  
                <Credeology margin="mg-t-1" size="size-3" fill="fill-dark"/>
            </div>
            <Switch>
                <Route path="/auth/login" component={LoginForm} message={setMessage}/>
                <Route path="/auth/passwordReset" component={ResetPasswordForm} message={setMessage}/>
                <Route path="/auth/signup" component={SignupForm} message={setMessage}/>
            </Switch>
    </div>
  );
}

export default AuthForm;