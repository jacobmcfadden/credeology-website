import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Path Components
import Website from '../components/routing/website/Website';
import Auth from '../components/routing/auth/Auth';
import AppProtected from '../components/routing/app/AppProtected';

// Special Routes
import AuthRoute from './AuthRoute';

export default (
    <Switch>
      {/* PUBLIC WEBSITE */}
        <Route exact path="/" component={Website}/>
        {/* AUTH ROUTES */}
		<Route path="/auth" component={Auth}/>   
        {/* PROTECTED APP ROUTES */}
        <AuthRoute path="/app/*" component={AppProtected}/>
    </Switch>
);