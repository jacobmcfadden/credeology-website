import React from 'react';
import {Switch, Route} from 'react-router-dom';

import RecoveryForm from '../../../containers/forms/RecoveryForm';
import SignupForm from '../../../containers/forms/SignupForm';
import LoginForm from '../../../containers/forms/LoginForm';

import CredeologyLogo from '../../../assets/logo/CredeologyLogo';

const Auth = (props) => {

  return (
    <div className="Auth">
      <div className="container">
          <div className="container__row justify-center">
            <div className="Authform">
              <div className="container__row m-b-1 m-t-2">
                <CredeologyLogo logoType="form"/>
                <div className="container__row ">
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