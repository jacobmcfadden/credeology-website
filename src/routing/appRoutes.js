import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Website from '../components/areas/website/Website';
import ResetPassword from '../components/areas/auth/ResetPassword';
import Signup from '../components/areas/auth/Signup';
import Login from '../components/areas/auth/Login';
import Verify from '../components/areas/auth/Verify';
import AppProtected from '../components/areas/app/AppProtected';


const isAuthenticated = false;
const isPhoneVerified = true;
const isEmailVerified = true;

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      isAuthenticated === false
      ? <Component {...props} />
      : <Redirect to='/verify' />
  )} />
);

const VerifyRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true 
    ? isEmailVerified === true && isPhoneVerified === true 
      ? <Redirect to='/app' /> 
      : <Component {...props} /> 
    : <Redirect to='/login' />
  )} />
);

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true 
    ? isEmailVerified === false
      ? <Redirect to='/verify' />
      : <Component {...props} />
    : <Redirect to='/login' />
  )} />
);

export default (
    <Switch>
      {/* PUBLIC WEBSITE */}
        <Route exact path="/" component={Website}/>
        {/* AUTH ROUTES */}
		    <Route path="/passwordReset" component={ResetPassword}/>
        <Route path="/signup" component={Signup}/>
		    <LoginRoute path="/login" component={Login}/>  
        <VerifyRoute path="/verify" component={Verify}/>  
        {/* PROTECTED APP ROUTES */}
        <AppRoute path="/app" component={AppProtected}/>
    </Switch>
)