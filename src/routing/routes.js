import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';
import VerifyRoute from './VerifyRoute';

// Components
import Website from './components/website/Website';
import Verify from './components/verify/Verify';
import Auth from './components/auth/Auth';
import AppProtected from './components/app/AppProtected';

export default (
    <Switch>
        <Route exact path="/" component={Website}/>
        <VerifyRoute exact path="/verify" component={Verify}/>
		<AuthRoute path="/auth" component={Auth}/>       
        <AppRoute path="/app" component={AppProtected}/>
    </Switch>
);