import React from 'react';
import { connect } from 'react-redux';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

import VerifyForm from '../../../containers/forms/VerifyForm';

import NotifyBanner from '../../../containers/lists/messages/NotifiyBanner';

const Verify = (props) => {
  return (
    <div className="Verify container">
      <NotifyBanner/>
        <div className="container__row">
          <div className="
          container__col-12 container__col-lg-6 container__col-lg-offset-3">
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
                  <VerifyForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  authMessage: state.auth.authMessage,
  user: state.auth.user
});

export default connect(mapStateToProps)(Verify);