import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UserAccount from './pages/UserAccount';
import Connect from './pages/Connect';
import Portal from './pages/Portal';
import AppNav from './AppNav';
import AppSubNav from './AppSubNav';


const AppProtected = (props) => {
  return (
    <div className="AppProtected">
      <p>This is the AppProtected Component</p>
      <AppNav/>
      <AppSubNav/>
      <Switch>
        <Route path="/app/account" component={UserAccount}/>
        <Route path="/app/connect" component={Connect}/>
        <Route component={Portal}/>
      </Switch>
    </div>
  );
}

export default AppProtected;