import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UserAccount from './pages/UserAccount/UserAccount';
import Connect from './pages/Connect';
import Portal from './pages/Portal';


const Display = (props) => {
  return (
    <div className="Display">
      <Switch>
        <Route path="/app/account" component={UserAccount}/>
        <Route path="/app/connect" component={Connect}/>
        <Route component={Portal}/>
      </Switch>
    </div>
  );
}

export default Display;