import React from 'react';

import TwoFactorForm from '../../../containers/forms/TwoFactorForm';
import CredeologyLogo from '../../../assets/logo/CredeologyLogo';

const TwoFactorAuth = (props) => {
  return (
    <div className="Verify">
      <div className="container">
          <div className="container__row justify-center">
            <div className="Authform">
              <div className="container__row m-b-1 m-t-2">
                <CredeologyLogo logoType="form"/>
                <div className="container__row ">
                  <TwoFactorForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TwoFactorAuth;