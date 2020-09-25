import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthRoute from './AuthRoute';

// Components
import Website from './components/website/Website';
import Auth from './components/auth/Auth';
import Verify from './components/verify/Verify';
import AppProtected from './components/app/AppProtected';

export default (
    <Switch>
        <Route exact path="/" component={Website}/>
        <AuthRoute exact path="/verify" component={Verify}/>
		<AuthRoute path="/auth" component={Auth}/>  
        <AuthRoute path="/app" component={AppProtected}/>
    </Switch>
);