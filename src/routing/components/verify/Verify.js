import React from 'react';
import { connect } from 'react-redux';

import CredeologyLogo from '../../../assets/logo/CredeologyLogo';
import VerifyForm from '../../../containers/forms/VerifyForm';

const Verify = (props) => {
  return (
    <div className="Verify">
      <div className="container">
        <div className="container__row">
          <div className="container__col-12">
            <div className="container bg-light p-a-1 Authform">
              <div className="container__row p-v-1">
                 <CredeologyLogo logoType="form"/>
                <div className="container__col-10 container__col-offset-1">
                  <VerifyForm/>
                </div>
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