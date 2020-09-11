import React from 'react';
import {Switch, Route} from 'react-router-dom';

import RecoveryForm from '../../../containers/forms/RecoveryForm';
import SignupForm from '../../../containers/forms/SignupForm';
import LoginForm from '../../../containers/forms/LoginForm';
import NotifyBanner from '../../../containers/lists/messages/NotifiyBanner';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

const Auth = (props) => {

  return (
    <div className="Auth container">
      <NotifyBanner/>
        <div className="container__row">
          <div className="container__col-12 container__col-sm-8 container__col-sm-offset-2 container__col-md-6 container__col-md-offset-3 container__col-lg-6 container__col-lg-offset-3">
            <div className="AuthForm form container">
              <div className="container__row p-v-2">
                {/* Logo */}
                <div className="container__col-10 container__col-offset-1">
                  <div className={`container__row align-content`}>
                    <Logo SVGClass="size-6 container__col-12" pathClass="fill-primary"/>  
                  </div>
                  <div className="container__row align-content m-t-1">
                    <Credeology SVGClass="size-2 container__col-12" pathClass="fill-dark"/>
                  </div>
                </div>
                <div className="container__col-10 container__col-offset-1">
                  <Switch>
                    <Route path={`${props.match.path}/signup`} component={SignupForm} />
                    <Route path={`${props.match.path}/recovery`} component={RecoveryForm} />
                    <Route component={LoginForm} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Auth;